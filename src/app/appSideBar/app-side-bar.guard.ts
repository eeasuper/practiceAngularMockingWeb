import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
// import {AppSideBarService} from './app-side-bar.service';

@Injectable({
  providedIn: 'root'
})
export class AppSideBarGuard implements CanActivate{

  // constructor(private sidebarService:AppSideBarService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = state.url;
    // console.log("from guard:"+url);
    // this.sidebarService.showSidebar = true;
    return true;
  }

}
