import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home/home.component';
import {DocsComponent } from './docs/docs/docs.component';
import {AppSideBarGuard} from './appSideBar/app-side-bar.guard'

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'docs', component: DocsComponent, pathMatch:'full', canActivate: [AppSideBarGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
