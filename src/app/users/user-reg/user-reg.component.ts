import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { UserDetail, APIResult } from './../../shared/user-detail'
import { AppService } from './../../shared/app.service'

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.scss']
})


export class UserRegComponent implements OnInit {

  constructor(
    private appService: AppService

  ) { }

  userForm: FormGroup


  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required])
    })

  }
  onSubmit() {
    console.log(this.userForm.value)
    this.appService.userSignup(this.userForm.value).subscribe(
      (res: UserDetail) => {

        console.log(res)
      }

    )

  }
  public indicator = (controlName: string, errName: string) => {
    return this.userForm.controls[controlName].hasError(errName)
  }

}
