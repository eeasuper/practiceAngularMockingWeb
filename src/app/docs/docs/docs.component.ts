import { Component, OnInit, EventEmitter,Output } from '@angular/core';
// import {AppComponent} from '../../app.component';
import {AppSideBarService} from '../../app-side-bar.service';
import {RightNavService} from '../../right-nav/right-nav.service'

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']

 
})
export class DocsComponent implements OnInit {
  isSidebarShowing:boolean;

  constructor(private sidebarService:AppSideBarService,private rightnavService:RightNavService){
    this.isSidebarShowing = true;
  }

  ngOnInit() {
    this.sidebarService.isShowingSubject.subscribe((val)=>{
      this.isSidebarShowing = val;
    })
    this.rightnavService.showingSubject.next(false);
  }

}
