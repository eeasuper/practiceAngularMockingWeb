import { Component, OnInit} from '@angular/core';
import {Router,NavigationStart,ActivatedRoute} from '@angular/router';
import {Observable,Subject} from 'rxjs';
import {AppSideBarService} from './app-side-bar.service';
// import {AppSideBarComponent} from './appSideBar/app-side-bar/app-side-bar.component';

import {SidenavContainerComponent} from './sidenav-container/sidenav-container.component';
import {RightNavService} from './right-nav/right-nav.service'

const routes :string[] = ["/docs","/api","/guides"]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  providers:[AppSideBarService]
})
export class AppComponent implements OnInit{

  showSb(event: boolean){
    this.isSidebarShowing = event;
  }

  isSidebarShowing:boolean;
  constructor(private sidebarService:AppSideBarService){

  }

  ngOnInit(){

  }

}
