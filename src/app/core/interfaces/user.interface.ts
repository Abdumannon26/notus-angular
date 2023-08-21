export interface IUser {
  name: string;
  surname: string;
}
export interface IUserFormData {
  User: IUSerForm
}
export interface IUSerForm {
  id: string;
  userName: string;
  userEmail: string;
  userMiddleName: string;
  userSurname: string;
  userAddress: string;
  city: string;
  country: string;
  postalCode: string;
  description: string;
}
