import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import {AppSharedModule} from "../../components/shared/app-shared/app-shared.module";


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    AppSharedModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
