import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSideBarRoutingModule } from './app-side-bar-routing.module';
import {AppSideBarComponent} from './app-side-bar/app-side-bar.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppSideBarRoutingModule
  ]
})
export class AppSideBarModule { }
