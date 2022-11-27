import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataEncryption} from "../../../services/DataEncryption";
import {Router} from "@angular/router";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{

  private readonly password = '123456789';
  private readonly email = 'MyEmail@email.com'

  loginForm: FormGroup;

  constructor(public dialogRef: DialogRef<LoginFormComponent>,
              public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  submitLoginForm(): void {
    const dataEncryptor = new DataEncryption();
    const encryptPassword = dataEncryptor.encryptString(this.loginForm.controls['password'].value)
    if (this.loginForm.controls['password'].value == this.password &&
        this.loginForm.controls['email'].value == this.email) {
      localStorage.setItem('isLogin','true');
      this.dialogRef.close();
      this.router.navigate(['main']);
    }

  }
}
