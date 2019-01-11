import { Component, OnInit, EventEmitter,Output } from '@angular/core';
// import {AppComponent} from '../../app.component';
import {AppSideBarService} from '../../app-side-bar.service';

@Component({
  selector: 'app-docs',
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
