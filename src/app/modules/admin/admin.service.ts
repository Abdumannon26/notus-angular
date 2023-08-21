import {Injectable} from '@angular/core';
import {Apollo, QueryRef} from 'apollo-angular';
import gql from 'graphql-tag';
import {IDashboard} from '../../core/interfaces/dashboard.interface';
import {IUSerForm, IUserFormData} from '../../core/interfaces/user.interface';

const dashboard = gql`
  query{
    allDashboardCards {
      id
      cardName
      cardType
      count
      percent
      perCentType
      period
    }
  }
`;
const user = gql`
  query User($id: ID!){
    User(id: $id) {
         id
         userName
         userEmail
         userMiddleName
         userSurname
         userAddress
         city
         country
         postalCode
         description
    }
  }
`;


const updateUser = gql`
        mutation updateUser($id: ID!,$userName:String!,$userEmail:String!,$userMiddleName:String!,$userSurname:String!,$userAddress:String!,) {
          updateUser(id: $id , userName:$userName, userEmail:$userEmail, userMiddleName:$userMiddleName, userSurname:$userSurname,userAddress:$userAddress) {
            id
            userName
            userEmail
            userMiddleName
            userSurname
            userAddress
            city
            country
            postalCode
            description
          }
        }`;

@Injectable()
export class AdminService {

  constructor(private apollo: Apollo) {
  }

  getHeaderStats(): QueryRef<IDashboard> {
    return this.apollo.watchQuery<IDashboard>({query: dashboard});
  }

  getUser(userId: string): QueryRef<IUserFormData> {
    return this.apollo.watchQuery<IUserFormData>({query: user, variables: {id: userId}});
  }

  updateUser(userForm: IUSerForm) {
    return this.apollo.mutate({
      mutation: updateUser,
      variables: {
        id: userForm.id,
        userName: userForm.userName,
        userEmail: userForm.userEmail,
        userMiddleName: userForm.userMiddleName,
        userSurname: userForm.userSurname,
        userAddress: userForm.userAddress,
        city: userForm.city,
        country: userForm.country,
        postalCode: userForm.postalCode,
        description: userForm.description
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateUser: {
          __typename: 'User',
          id: userForm.id,
          userName: userForm.userName,
          userEmail: userForm.userEmail,
          userMiddleName: userForm.userMiddleName,
          userSurname: userForm.userSurname,
          userAddress: userForm.userAddress,
          city: userForm.city,
          country: userForm.country,
          postalCode: userForm.postalCode,
          description: userForm.description
        },
      },
    });
  }
}
