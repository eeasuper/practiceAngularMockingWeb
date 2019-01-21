import { ChangeDetectorRef,ElementRef,Component, OnInit,Input,OnChanges,Renderer2,ViewChild } from '@angular/core';
import {trigger, state, style, animate,transition} from '@angular/animations';
import {Router,NavigationStart} from '@angular/router'
import {Observable} from 'rxjs'

import {WindowSize} from '../../window-size';
import {WindowResizeService} from '../../window-resize.service';
import {AppSideBarService} from '../../app-side-bar.service';

const routes :string[] = ["/docs","/api","/guide"]

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.css']
})
export class SidenavContentComponent implements OnInit,OnChanges {
  @Input('isSbShowing') private isSbShowing:boolean;
  @ViewChild('routerCon') private routerCon: ElementRef;
  isSidebarShowing:boolean;

  windowResize$:Observable<WindowSize>
  goDarkWhenSidenavExpands:boolean;

  sidebar$:Observable<boolean>;

  constructor(private renderer:Renderer2,private router:Router,private sidebarService:AppSideBarService,private windowresizeService:WindowResizeService,private cdRef:ChangeDetectorRef){
  }

  ngOnChanges(){
    this.isSidebarShowing=this.isSbShowing;
    if(this.isSbShowing){
      this.renderer.removeClass(this.routerCon.nativeElement,'expand')
      this.renderer.addClass(this.routerCon.nativeElement, 'contract')
    }
    if(!this.isSbShowing){
      this.renderer.removeClass(this.routerCon.nativeElement,'contract')
      this.renderer.addClass(this.routerCon.nativeElement, 'expand')
    }
    if(this.goDarkWhenSidenavExpands){

    }

  }

  ngOnInit() {
    this.windowResize$ = this.windowresizeService.windowSizeSubject.asObservable();
    this.windowResize$.subscribe((val)=>{
      if(val === WindowSize.small){
        console.log("windowsize is small");
        this.renderer.setStyle(this.routerCon.nativeElement,"padding", "80px 1rem 1rem");
      }else{
        this.renderer.setStyle(this.routerCon.nativeElement, "padding", "80px 3rem 1rem");
      }

      if(val === WindowSize.medium || val === WindowSize.mediumSmall || WindowSize.small){
        this.goDarkWhenSidenavExpands = true;
        // 
      }else{
        this.goDarkWhenSidenavExpands = false;
      }
      this.cdRef.detectChanges();
    })

    this.sidebar$ = this.sidebarService.isShowingSubject.asObservable();
    this.sidebar$.subscribe((val)=>{
      if(this.goDarkWhenSidenavExpands && val){
        this.renderer.addClass(this.routerCon.nativeElement, "drawer-shown");
      }else if(this.goDarkWhenSidenavExpands && !val){
        this.renderer.removeClass(this.routerCon.nativeElement, "drawer-shown");
      }
    })

   this.router.events.subscribe((events) => {
    if (events instanceof NavigationStart) {
      routes.forEach((val)=>{
        if(events.url === "/"){
          this.renderer.removeClass(this.routerCon.nativeElement,"content");
        }else{
          this.renderer.addClass(this.routerCon.nativeElement,"content");
        }
      })
    }
    })
   }

}
