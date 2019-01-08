import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router';
import {AppSideBarService} from "../../app-side-bar.service";
// import {trigger, state, style, animate,transition} from '@angular/animations';

@Component({
  selector: 'app-side-bar',
  // animations: [
  //   trigger('slideInOut',[
  //     transition(':enter', [
  //       style({transform: 'translateX(-100%)'}),
  //       animate('0.8s',style({transform:'translateX(0%)'}))
  //       ]),
  //     transition(':leave',[
  //       style({transform: 'translateX(0%)'}),
  //       animate('0.8s', style({transform:'translateX(-100%)'}))
  //       ])
  //   ])
  // ],
  templateUrl: './app-side-bar.component.html',
  styleUrls: ['./app-side-bar.component.css']
})
export class AppSideBarComponent implements OnInit {

  isSidebarShowing:boolean

  constructor(private sidebarService:AppSideBarService) {
    this.isSidebarShowing = true;
  }

  ngOnInit() {
    this.sidebarService.isShowingChange.subscribe((val)=>{
      this.isSidebarShowing = val;
    })
  }

}
