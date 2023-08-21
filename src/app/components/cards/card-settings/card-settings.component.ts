import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AdminService} from '../../../modules/admin/admin.service';

@Component({
  standalone: true,
  selector: 'app-card-settings',
  templateUrl: './card-settings.component.html',
  imports: [
    ReactiveFormsModule
  ]
})
export class CardSettingsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    this.getUser()
  }

  onSubmit() {
    this.adminService.updateUser(this.form.value).subscribe(res => {
      console.log(res)
    });
  }

  private getUser(): void {
    this.adminService.getUser('1')
      .valueChanges.subscribe(res => {
      this.form.patchValue(res.data.User)
    })
  }

  private createForm(): void {
    this.form = this.fb.group({
      id: null,
      userName: null,
      userEmail: null,
      userMiddleName: null,
      userSurname: null,
      userAddress: null,
      city: null,
      country: null,
      postalCode: null,
      description: null,
    })
  }
}
