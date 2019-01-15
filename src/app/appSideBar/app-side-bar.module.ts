import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSideBarRoutingModule } from './app-side-bar-routing.module';
import {AppSideBarComponent} from './app-side-bar/app-side-bar.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@NgModule({
  declarations: [NavItemComponent,AppSideBarComponent, SubMenuComponent],
  imports: [
    CommonModule,
    AppSideBarRoutingModule
  ],
  exports:[
  AppSideBarComponent]
})
export class AppSideBarModule { }
