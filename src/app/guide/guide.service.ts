import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {AppSideBarService} from '../app-side-bar.service';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  // isSidebarShowing: Observable<boolean> = this.sidebarService.isShowingChange.asObservable();

  constructor(private sidebarService: AppSideBarService) {
    // this.isSidebarShowing.subscribe((val)=>{
    //   // console.log("GuideService:" + val)
    // })
  }

}
