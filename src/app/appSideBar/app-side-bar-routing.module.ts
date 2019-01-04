import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppSideBarComponent} from './app-side-bar/app-side-bar.component';

const routes: Routes = [
  {
    path: 'docs/*', component: AppSideBarComponent, outlet: 'sidebar', pathMatch: 'full'
  },
  {
    path: 'api/*', component: AppSideBarComponent, outlet: 'sidebar', pathMatch:'full'
  },
  {
    path: 'guide/*', component: AppSideBarComponent, outlet: 'sidebar', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSideBarRoutingModule { }
