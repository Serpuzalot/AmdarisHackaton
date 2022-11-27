import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import * as gsap from "gsap";
import {interval, take} from "rxjs";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  intervalSubscribe = interval(10);
  position = {
    top: window.scrollY,
    left: window.scrollX
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.position.top = window.scrollY;
    this.position.left = window.scrollX;
  }

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
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

  onDownButtonClick(): void {
    this.intervalSubscribe.pipe(take(150)).subscribe(()=> {
      window.scrollTo(this.position.left + 5.3, this.position.top + 5.3);
      this.position.left = window.scrollX;
      this.position.top = window.scrollY;
    })
  }
}
