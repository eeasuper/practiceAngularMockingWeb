import { Injectable } from '@angular/core';

import {SidenavContainerComponent} from './sidenav-container.component';
import {WatchSidebarService} from '../watch-sidebar.service'
@Injectable({
  providedIn: 'root'
})
export class ChangeSidenavService {

  constructor(private watchSidebarService:WatchSidebarService, private sidebarCon:SidenavContainerComponent) {
    // this.watchSidebarService.watchSidebar$.subscribe((val)=>{
    //   console.log("changesidenav")
    //   this.sidebarCon.isSidebarShowing=val;
    // })
   }
}
