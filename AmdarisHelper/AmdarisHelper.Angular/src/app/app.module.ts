import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AppSharedModule} from "./components/shared/app-shared/app-shared.module";
import { LoginFormComponent } from './pages/login-page/login-form/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RegistrationFormComponent } from './pages/login-page/registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppSharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
