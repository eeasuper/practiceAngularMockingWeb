import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuideComponent} from './guide.component';
import {QuickstartComponent} from './quickstart/quickstart.component';


const guideRoutes: Routes = [
  {
    path: '', component: GuideComponent, children: [
      {
        path:'quickstart',component: QuickstartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(guideRoutes)],
  exports: [RouterModule]
})
export class GuideRoutingModule { }
