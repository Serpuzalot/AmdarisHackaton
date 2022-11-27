import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path:'', component: LoginPageComponent},
  {
    path:'main',
    loadChildren: ()=> import('./pages/main-page/main-page.module').then(m => m.MainPageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
