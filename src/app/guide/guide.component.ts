import { Component, OnInit,ChangeDetectorRef,OnChanges } from '@angular/core';
import {GuideService} from './guide.service';
import {AppSideBarService} from '../app-side-bar.service';
import {WatchSidebarService} from '../watch-sidebar.service';
import {SidenavContainerComponent} from '../sidenav-container/sidenav-container.component'

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
  providers: [GuideService]
})
export class GuideComponent implements OnInit,OnChanges {

  // constructor(private guideService: GuideService) { }
  constructor(){}
  // constructor(private watchSidebarService:WatchSidebarService){}

  ngOnChanges(){
    

  }
  ngOnInit() {
    
  }

}
