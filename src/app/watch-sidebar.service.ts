import { Injectable,ChangeDetectorRef } from '@angular/core';
import {Observable} from 'rxjs';
import {SidenavContainerComponent} from './sidenav-container/sidenav-container.component';

import {AppSideBarService} from './app-side-bar.service';
@Injectable({
  providedIn: 'root'
})
export class WatchSidebarService {
  isSidebarVisible: boolean;

  watchSidebar$: Observable<boolean> = this.sidebarService.isShowingChange.asObservable();

  constructor(private sidebarService:AppSideBarService) {

  }
}
