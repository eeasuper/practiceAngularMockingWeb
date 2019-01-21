import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSideBarRoutingModule } from './app-side-bar-routing.module';
import {AppSideBarComponent} from './app-side-bar/app-side-bar.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

import {AppSideBar2Component} from './app-side-bar2/app-side-bar2.component'
import {NavItem2Component} from './nav-item2/nav-item2.component'
import {SubMenu2Component} from './sub-menu2/sub-menu2.component'

@NgModule({
  declarations: [NavItemComponent,AppSideBarComponent, SubMenuComponent
  ,AppSideBar2Component,NavItem2Component,SubMenu2Component],
  imports: [
    CommonModule,
    AppSideBarRoutingModule
  ],
  exports:[
  AppSideBarComponent,AppSideBar2Component]
})
export class AppSideBarModule { }
