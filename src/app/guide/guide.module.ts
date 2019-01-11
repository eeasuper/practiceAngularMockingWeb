import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GuideComponent} from './guide.component';
import {QuickstartComponent} from './quickstart/quickstart.component';
import {GuideRoutingModule} from './guide-routing.module';

@NgModule({
  declarations: [
    GuideComponent,
    QuickstartComponent
  ],
  imports: [
    CommonModule,
    GuideRoutingModule
  ]
})
export class GuideModule { }
