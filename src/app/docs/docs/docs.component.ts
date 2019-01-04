import { Component, OnInit, DoCheck, EventEmitter,Output } from '@angular/core';
// import {AppComponent} from '../../app.component';
import {AppSideBarService} from '../../app-side-bar.service';
import {AppSideBarComponent} from '../../appSideBar/app-side-bar/app-side-bar.component';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit,DoCheck {

  constructor(private sidebarService:AppSideBarService){}

  ngOnInit() {
  }

  ngDoCheck(){
    this.sidebarService.isShowing = true;
  }
}
