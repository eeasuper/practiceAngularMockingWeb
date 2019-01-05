import { Directive, Component, OnInit, ViewChild, ViewChildren, ElementRef, Renderer2,AfterViewInit} from '@angular/core';
import {AppSideBarService} from '../app-side-bar.service';

@Directive({selector:'btnRipple '})

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit,AfterViewInit {
  @ViewChildren('sideMenuIcon') menuIcon : QueryList<>
  // @ViewChild('#btnRipples')  btnRipplesElement: ElementRef;
  // @ViewChild('#fstRipple') fstRippleElement: ElementRef;
  // @ViewChild('#scdRipple')  scdRippleElement: ElementRef;
  // @ViewChild('#trdRipple')  trdRippleElement: ElementRef;

  ripplesElement: any;
  fstRipple: any;
  scdRipple: any;
  trdRipple: any;

  isButtonShowing:boolean;
  isSidebarShowing:boolean;

  event: MouseEvent;
  clientX: number = 0;
  clientY: number = 0;

  constructor(private sidebarService:AppSideBarService, private renderer: Renderer2) { }

  toggleShowing(): void{
    if(this.isSidebarShowing){
      this.sidebarService.isShowingChange.next(false);
    }else if(!this.isSidebarShowing){
      this.sidebarService.isShowingChange.next(true);
    }
  }

  doTripple(event: MouseEvent):void{
    // this.renderer.setStyle(this.fstRipple, 'transform', 'scale(64px, 64px)')
    this.renderer.addClass(this.fstRipple,'doRipple');
  }

  ngOnInit() {
    this.sidebarService.isShowingChange.subscribe((val)=>{
      this.isSidebarShowing = val;
    })
    this.sidebarService.isButtonShowingChange.subscribe((val)=>{
      // console.log("serviceBUTTON")
      this.isButtonShowing = val;  
    })
  }

  ngAfterViewInit(){
    //   this.ripplesElement = this.btnRipplesElement.nativeElement;
    // this.fstRipple = this.fstRippleElement.nativeElement;
    // this.scdRipple = this.scdRippleElement.nativeElement;
    // this.trdRipple = this.trdRippleElement.nativeElement;
  }
}
