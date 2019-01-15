import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home/home.component';
import {DocsComponent } from './docs/docs/docs.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'docs', component: DocsComponent, pathMatch:'full'
  },
  {
    path: 'guide', loadChildren: './guide/guide.module#GuideModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {enableTracing:false, 
      scrollPositionRestoration: 'enabled',
      anchorScrolling:'enabled'
      // scrollOffset: [0,0]
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
