import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnchorDirective } from './anchor.directive';
import { RightNavComponent } from './right-nav.component';
import { RightNavDirective } from './right-nav.directive';
import { SubtitlePipe } from './subtitle.pipe';
@NgModule({
  declarations: [AnchorDirective,
  RightNavComponent,
  RightNavDirective,
  SubtitlePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RightNavComponent
  ]
})
export class RightNavModule { }
