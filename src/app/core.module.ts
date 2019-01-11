import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RightNavService} from './right-nav/right-nav.service'

@NgModule({
    imports: [
      CommonModule
    ],
    exports: [ 
    ],
    declarations: [ 
    ],
    providers: [
        RightNavService,
    ]
})
export class CoreModule { }