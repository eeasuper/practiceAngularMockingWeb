import { Component, OnInit, EventEmitter,Output } from '@angular/core';
// import {AppComponent} from '../../app.component';
import {AppSideBarService} from '../../app-side-bar.service';
import {AppSideBarComponent} from '../../appSideBar/app-side-bar/app-side-bar.component';
import {trigger, state, style, animate,transition} from '@angular/animations';

@Component({
  selector: 'app-docs',
  animations: [
    trigger('expandInOut',[
      state('in', style({marginLeft: '260px'})),
      state('out', style({marginLeft:'0px'})),
      transition('in<=>out',[
        animate('0.2s')
      ])
    ])
  ],
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']

 
})
export class DocsComponent implements OnInit {
  isSidebarShowing:boolean;

  constructor(private sidebarService:AppSideBarService){
    this.isSidebarShowing = true;
  }

  ngOnInit() {
    this.sidebarService.isShowingChange.subscribe((val)=>{
      this.isSidebarShowing = val;
    })
  }

}
