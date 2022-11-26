import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegistrationFormComponent} from "./registration-form/registration-form.component";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(public dialog: MatDialog) {
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width:'20%',
      panelClass: 'login-form-dialog'
    });
    dialogRef.afterClosed().subscribe(response => {
      if (response === true) {
        this.openRegistrationDialog();
      }
    });
  }

  openRegistrationDialog(): void {
    this.dialog.open(RegistrationFormComponent,{
      panelClass: 'registration-form-dialog',
      width: '20%'
    })
  }
}
