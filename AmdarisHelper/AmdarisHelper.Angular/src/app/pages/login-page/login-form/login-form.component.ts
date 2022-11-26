import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataEncryption} from "../../../services/DataEncryption";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{

  loginForm: FormGroup;

  constructor(public dialog: MatDialog) {
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
  }
}
