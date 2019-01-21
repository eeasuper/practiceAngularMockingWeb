import {ChangeDetectorRef,ViewChild,ElementRef,HostListener, Input,Component, OnInit,OnChanges, Renderer2, ChangeDetectionStrategy} from '@angular/core';
import {Router,NavigationStart} from '@angular/router';
import {trigger, state, style, animate,transition,query} from '@angular/animations';
import {Observable} from 'rxjs';

import {AppSideBarComponent} from '../appSideBar/app-side-bar/app-side-bar.component';
import {SidenavContentComponent} from './sidenav-content/sidenav-content.component';

import {WindowSize} from '../window-size';
import {ComponentsToShow} from '../componentsToShow.class';

import {AppSideBarService} from '../app-side-bar.service';
import {RightNavService} from '../right-nav/right-nav.service'
import {WindowResizeService} from '../window-resize.service';




@Component({
  selector: 'app-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.css'],
  providers:[]
})
export class SidenavContainerComponent implements OnInit,OnChanges {
  // @Input('isSbShowing') isSbShowing: boolean;
  @ViewChild('leftContainer') private leftContainer:ElementRef;
  @Input() watchSidebar$: Observable<boolean>;
  isSidebarShowing:boolean;
  isRightNavShowing:boolean;
  titles:string[]=[];
  pageYOfTitles:number[]=[];
  url: string;

  currentWindowSize:WindowSize;
  showWhichComp:ComponentsToShow;


  showWhichComp$:Observable<ComponentsToShow>

  a:Observable<boolean>

  constructor(private cdRef : ChangeDetectorRef, private router:Router, private windowresizeService:WindowResizeService,private sidebarService:AppSideBarService, private renderer: Renderer2,private rightnavService:RightNavService){

  }

  ngOnChanges(){
    // this.isSidebarShowing = this.isSbShowing;
  }

  ngOnInit(){
    this.a = this.sidebarService.isShowingSubject.asObservable();
    this.a.subscribe((val)=>{
      this.isSidebarShowing = val;
    })
    //-----Note: This boolean subscription is necessary because it triggers ngOnChanges in RightNavComponent.
    this.rightnavService.showing$.subscribe((val)=>{
      this.isRightNavShowing=val;
      if(!val){
        this.renderer.setStyle(this.leftContainer.nativeElement,"max-width", '100%');
      }else{
        this.renderer.setStyle(this.leftContainer.nativeElement, 'max-width', '82%');
      }
      this.cdRef.detectChanges();
      //-----Note: It is important to detectChanges here because Angular doesn't detect the changes in this observable.
    })
    this.rightnavService.titles$.subscribe((val)=>{
      this.titles=val;
      this.cdRef.detectChanges();
    })
    this.rightnavService.pageYOfTitles$.subscribe((val)=>{
      this.pageYOfTitles=val;
      this.cdRef.detectChanges();
    })
    this.rightnavService.url$.subscribe((url)=>{
      this.url = url;
      this.cdRef.detectChanges();
    })
    this.showWhichComp$ = this.windowresizeService.showWhichCompSubject.asObservable();
    this.showWhichComp$.subscribe((val)=>{
      // console.log("from sidenav show which comp:");
      // console.log(val);
      this.showWhichComp = val;
      this.cdRef.detectChanges();
    })
  }


}
