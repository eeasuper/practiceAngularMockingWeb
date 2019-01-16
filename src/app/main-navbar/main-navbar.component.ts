import {Output, Component, OnInit, Renderer2, EventEmitter,ElementRef,ViewChild,OnDestroy} from '@angular/core';
import {Observable,Subscription} from 'rxjs';
import {Router,NavigationStart} from '@angular/router';

import {AppSideBarService} from '../app-side-bar.service';
import {MenuButtonComponent} from './menu-button/menu-button.component';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css'],
  providers: [AppSideBarService]
})
export class MainNavbarComponent  implements OnInit,OnDestroy  {

  @ViewChild('navCon') private navCon:ElementRef;
  @Output() showSidebar: EventEmitter<boolean> = new EventEmitter();

  isButtonShowing:boolean;
  isSidebarShowing:boolean;

  clientX: number = 0;
  clientY: number = 0;
  clicked: boolean;
  subscription:Subscription;

  constructor(private sidebarService:AppSideBarService,private router:Router,private renderer:Renderer2) {
    this.subscription = this.router.events.subscribe((events) => {
      if (events instanceof NavigationStart) {
        if(events.url === "/"){
          this.renderer.addClass(this.navCon.nativeElement, 'transparent');
          this.renderer.setStyle(this.navCon.nativeElement, "margin-left", '16px');
          this.renderer.setStyle(this.navCon.nativeElement, "position", 'absolute');
        }else{
          this.renderer.removeClass(this.navCon.nativeElement, 'transparent');
          this.renderer.setStyle(this.navCon.nativeElement, 'position', 'fixed');
          this.renderer.removeStyle(this.navCon.nativeElement, 'margin-left');
        }
      }
    })
   }
  toggleShowing(): void{
    if(this.isSidebarShowing){
      this.sidebarService.isShowingChange.next(false);
      this.showSidebar.emit(false);
    }else if(!this.isSidebarShowing){
      this.sidebarService.isShowingChange.next(true);
      this.showSidebar.emit(true);
    } 
  }

  doRipple(event: MouseEvent):void{
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
      this.showSidebar.emit(val)
    })
    this.sidebarService.isButtonShowingChange.subscribe((val)=>{
      this.isButtonShowing = val;  
      this.showSidebar.emit(val)
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
