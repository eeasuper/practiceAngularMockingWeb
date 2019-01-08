import { Directive, ComponentFactoryResolver, Component, OnInit, Input, ViewChild, QueryList, ViewChildren, ElementRef, Renderer2,AfterViewInit} from '@angular/core';
import {AppSideBarService} from '../app-side-bar.service';
import {RippleDirective} from '../btn-ripple.directive';
import {MenuButtonComponent} from './menu-button/menu-button.component';
// @Directive({selector:'btnRipple'})
// export class Ripple {
//   @Input() id : string;
// }
// import {Ripple} from '../Ripple'

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent  implements OnInit  {
  @ViewChild(RippleDirective) ripDir: RippleDirective;

  isButtonShowing:boolean;
  isSidebarShowing:boolean;

  clientX: number = 0;
  clientY: number = 0;
  clicked: boolean;
  constructor(private sidebarService:AppSideBarService) {
   }
  toggleShowing(): void{
    if(this.isSidebarShowing){
      this.sidebarService.isShowingChange.next(false);
    }else if(!this.isSidebarShowing){
      this.sidebarService.isShowingChange.next(true);
    }
  }

  doTripple(event: MouseEvent):void{
    this.clicked = true;
    this.clientX = event.clientX;
    this.clientY = event.clientY;
    setTimeout(()=>{
      this.clicked = false;
    },0)
  }

  ngOnInit() {
    this.sidebarService.isShowingChange.subscribe((val)=>{
      this.isSidebarShowing = val;
    })
    this.sidebarService.isButtonShowingChange.subscribe((val)=>{
      this.isButtonShowing = val;  
    })
  }

}
