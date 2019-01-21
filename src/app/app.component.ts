import { Component, OnInit, HostListener,OnDestroy,ChangeDetectorRef} from '@angular/core';
import {Router,NavigationStart} from '@angular/router';
import {Observable,Subject} from 'rxjs';

import {AppSideBarService} from './app-side-bar.service';
import {RightNavService} from './right-nav/right-nav.service'
import {WindowResizeService} from './window-resize.service';

import {WindowSize} from './window-size';
import {WindowSizeClass} from './window-size.class';
import {ComponentsToShow} from './componentsToShow.class';

const routes :string[] = ["/docs","/api","/guide"]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  providers:[AppSideBarService,RightNavService,WindowResizeService]
})
export class AppComponent implements OnInit,OnDestroy{
  isSidebarShowing:boolean;
  isRightnavShowing:boolean;
  shouldRightnavShow:boolean;

  previousWindowSize:number = null;

  showSb(event: boolean){
    this.isSidebarShowing = event;
  }

//Factors that affect sidebar and right nav:
//Route and WindowSize.
//Components to be affected: Sidenav-container(side-bar), main-nav, and right-nav.
//

  @HostListener('window:resize', ['$event'])
  doMediaQuery(event){
    // console.log(this.windowSize);
    let windowWidth = window.innerWidth;
    let components:ComponentsToShow = this.windowresizeService.getCurrentComps();
    if(components.sidebar){
    if(windowWidth > 980 && this.previousWindowSize <=980){
      console.log("0 : "+this.previousWindowSize);
      let test = {current: windowWidth, previous:this.previousWindowSize}
      this.windowresizeService.setComponents(windowWidth, this.previousWindowSize, components,test);
      this.previousWindowSize = windowWidth;
    }
    if(windowWidth <= 980 && this.previousWindowSize > 980){
      console.log("1 : "+this.previousWindowSize);
      let test = {current: windowWidth, previous:this.previousWindowSize}
      this.windowresizeService.setComponents(windowWidth, this.previousWindowSize, components,test);
      this.previousWindowSize = windowWidth;
      console.log("fjdk");
    }
    if(windowWidth <= 770 && this.previousWindowSize > 770){
      let test = {current: windowWidth, previous:this.previousWindowSize}
      this.windowresizeService.setComponents(windowWidth, this.previousWindowSize, components,test);
      this.previousWindowSize = windowWidth;
      console.log("fjdkfa");
    }
    if(windowWidth > 770 &&  this.previousWindowSize <=770 ){
      let test = {current: windowWidth, previous:this.previousWindowSize}
      this.windowresizeService.setComponents(windowWidth, this.previousWindowSize, components,test);
      this.previousWindowSize = windowWidth;
    }
    if(windowWidth <= 570 && this.previousWindowSize > 570){
      let test = {current: windowWidth, previous:this.previousWindowSize}
      this.windowresizeService.setComponents(windowWidth, this.previousWindowSize, components,test);
      this.previousWindowSize = windowWidth;
    }
  }
  }


  constructor(private sidebarService:AppSideBarService, private rightnavService:RightNavService, 
    private router:Router,private cdRef:ChangeDetectorRef,private windowresizeService:WindowResizeService){
  }

  ngOnInit(){
    this.previousWindowSize = window.innerWidth;
    console.log("starting at: "+ window.innerWidth)
    this.router.events.subscribe((events) => {
    if (events instanceof NavigationStart) {
      routes.forEach((val)=>{
        if(events.url.includes(val)){
          this.shouldRightnavShow = true;
        }
      })
    }
  })
    // this.rightnavService.showing$.subscribe((val)=>{
    //   console.log("app change detected")
    //   this.cdRef.detectChanges();
    // })
  }

  ngOnDestroy(){

  }
}
