import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import {AppSharedModule} from "../../components/shared/app-shared/app-shared.module";



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule
  ]
})
export class LoginPageModule { }
