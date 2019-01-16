import {ChangeDetectorRef,ViewChild,ElementRef, Input,Component, OnInit,OnChanges, Renderer2, ChangeDetectionStrategy} from '@angular/core';
import {Router,NavigationStart,ActivatedRoute} from '@angular/router';
import {trigger, state, style, animate,transition,query} from '@angular/animations';
import {Observable} from 'rxjs';

import {AppSideBarComponent} from '../appSideBar/app-side-bar/app-side-bar.component';
import {SidenavContentComponent} from './sidenav-content/sidenav-content.component';
import {AppSideBarService} from '../app-side-bar.service';
import {RightNavService} from '../right-nav/right-nav.service'
@Component({
  selector: 'app-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.css'],
  providers:[AppSideBarService,RightNavService]
})
export class SidenavContainerComponent implements OnInit,OnChanges {
  @Input('isSbShowing') isSbShowing: boolean;
  @ViewChild('leftContainer') private leftContainer:ElementRef;
  @Input() watchSidebar$: Observable<boolean>;

  isSidebarShowing:boolean;
  isRightNavShowing:boolean;
  titles:string[]=[];
  pageYOfTitles:number[]=[];
  url: string;

  constructor(private cdRef : ChangeDetectorRef,private sidebarService:AppSideBarService, private renderer: Renderer2,private rightnavService:RightNavService){

  }

  ngOnChanges(){
    this.isSidebarShowing = this.isSbShowing;
  }

  ngOnInit(){
    //-----Note: This boolean subscription is necessary because it triggers ngOnChanges in RightNavComponent.
    this.rightnavService.showing$.subscribe((val)=>{
      this.isRightNavShowing=val;
      if(!val){
        this.renderer.setStyle(this.leftContainer.nativeElement,"max-width", '100%');
      }else{
        this.renderer.setStyle(this.leftContainer.nativeElement, 'max-width', '82%');
      }
      //-----Note: It is important to detectChanges here because Angular doesn't detect the changes in this observable.
      this.cdRef.detectChanges();
    })
    this.rightnavService.titles$.subscribe((val)=>{
      this.titles=val;
    })
    this.rightnavService.pageYOfTitles$.subscribe((val)=>{
      this.pageYOfTitles=val;
      this.cdRef.detectChanges();
    })
    this.rightnavService.url$.subscribe((url)=>{
      this.url = url;
      this.cdRef.detectChanges();
    })
  }


}
