import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.email, Validators.required]),
    'password': new FormControl(null, [Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/), Validators.required])
  })
  getRegisterInfo(registerForm: any) {
    if (registerForm.valid == true) {
      console.log(registerForm.value);
    }

  }


  ngOnInit(): void {
  }

}
