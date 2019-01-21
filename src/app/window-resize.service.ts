import { Injectable,HostListener } from '@angular/core';
import {Router,NavigationStart} from '@angular/router';
import {Observable,Subscription,Subject,BehaviorSubject} from 'rxjs';

import {AppSideBarService} from './app-side-bar.service';
import {RightNavService} from './right-nav/right-nav.service'

import {WindowSize} from './window-size';
// import {WindowSizeClass} from './window-size.class';
import {ComponentsToShow} from './componentsToShow.class'

const routes :string[] = ["/docs","/api","/guide"]

@Injectable({
  providedIn: 'root'
})
export class WindowResizeService {
  currentComps:ComponentsToShow = null;

  windowSizeSubject:Subject<WindowSize> = new Subject<WindowSize>();
  windowSize$:Observable<WindowSize> = this.windowSizeSubject.asObservable();

  // showWhichCompSubject:Subject<ComponentsToShow> = new Subject<ComponentsToShow>();
  showWhichCompSubject:Subject<ComponentsToShow> = new Subject<ComponentsToShow>();
  showWhichComp$:Observable<ComponentsToShow> = this.showWhichCompSubject.asObservable();

  routerSubscription:Subscription;


//I need to make the setter below be able to know which components to set...
  constructor(private router:Router, private sidebarService:AppSideBarService,private rightnavService:RightNavService) {
    // this.windowSize$.subscribe((val)=>{
    //   this.currentwindowSize = val;
    // })

    this.routerSubscription = this.router.events.subscribe((events) => {
      if (events instanceof NavigationStart) {
        routes.forEach((val,ind,arr)=>{
          if(events.url.includes(val)){
            if(events.url.includes(arr[1]) || events.url.includes(arr[2])){
              let curComps = new ComponentsToShow();
              curComps.sidebar = true;
              curComps.rightnav = true;
              this.showWhichCompSubject.next(curComps)
            }else if(events.url.includes(arr[0])){
              let curComps = new ComponentsToShow();
              curComps.sidebar = true;
              curComps.rightnav = false;
              this.showWhichCompSubject.next(curComps);
            }
          }
        })
      }
    })

    this.showWhichComp$.subscribe((val)=>{
      this.currentComps = val;
    })
  }

  getCurrentComps():ComponentsToShow{
    return this.currentComps;
  }

  setComponents(curWindowSize:number, prevWindowSize:number, whichCompsToShow:ComponentsToShow,test:any){
    //goal of this function is to send values to other observables.
    //-----NOTE:If curComps is null, which should be when the route is not one of the three values in routes array, this function should fail to do anything...

    let curComps = new ComponentsToShow();
    if(curWindowSize > 980 && prevWindowSize <=980){
      this.sidebarService.isShowingSubject.next(true);
      if(whichCompsToShow.rightnav){
        this.rightnavService.showingSubject.next(true);
      }
      console.log("0!")
      this.windowSizeSubject.next(WindowSize.full);
    }
    if(curWindowSize <= 980 && prevWindowSize > 980){
      this.sidebarService.isShowingSubject.next(false);
      if(whichCompsToShow.rightnav){
        this.rightnavService.showingSubject.next(true);
      }
      console.log("A!")
      this.windowSizeSubject.next(WindowSize.medium);
    }
    if(curWindowSize <= 770 && prevWindowSize > 770){
      this.sidebarService.isShowingSubject.next(false);
      this.rightnavService.showingSubject.next(false);
      console.log("B!")
      this.windowSizeSubject.next(WindowSize.mediumSmall);
    }
    if(curWindowSize > 770 && prevWindowSize <=770 ){
      // this.sidebarService.isShowingSubject.next(false);
      console.log("fdkdk")
      this.rightnavService.showingSubject.next(true);
      this.windowSizeSubject.next(WindowSize.mediumSmall);
    }
    if(curWindowSize <= 570 && prevWindowSize > 570){
      this.sidebarService.isShowingSubject.next(false);
      this.rightnavService.showingSubject.next(false);
      //the windowSizeSubject below should make known that application should be changed to MOBILE mode.
      this.windowSizeSubject.next(WindowSize.small);
    }
    // if(curWindowSize === WindowSize.full && this.currentComps.rightnav && this.currentComps.sidebar){
    //   curComps.sidebar = true;
    //   curComps.rightnav = true;
    // }
    // else if(curWindowSize === WindowSize.medium && this.currentComps.rightnav && !this.currentComps.sidebar){
    //   this.isSidebarShowing = false;
    //   this.isRightNavShowing = true; 
    // }
    // else if(curWindowSize === WindowSize.mediumSmall && !this.currentComps.rightnav && !this.currentComps.sidebar){
    //   this.isSidebarShowing = false;
    //   this.isRightNavShowing = false; 
    // }
    // else{
    //   this.isSidebarShowing = false;
    //   this.isRightNavShowing = false;  
    // }
    return null;
  }

  getComponentToShow(curWindowSize:WindowSize,curComponentsToShow:ComponentsToShow):ComponentsToShow{

    return null;
  }
}
