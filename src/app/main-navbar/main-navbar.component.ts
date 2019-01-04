import { Component, OnInit } from '@angular/core';
import {AppSideBarService} from '../app-side-bar.service';
@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  isShowing:boolean;
  constructor(private sidebarService:AppSideBarService) { }

  ngOnInit() {
    this.sidebarService.isShowingChange.subscribe((val)=>{
      console.log("from main-navbar component"+val);
      this.isShowing = val;
    })
  }

}
