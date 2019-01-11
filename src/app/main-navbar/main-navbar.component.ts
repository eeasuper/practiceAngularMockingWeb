import {Output, Component, OnInit, Renderer2, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';

import {AppSideBarService} from '../app-side-bar.service';
import {WatchSidebarService} from '../watch-sidebar.service';
import {MenuButtonComponent} from './menu-button/menu-button.component';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css'],
  providers: [AppSideBarService,WatchSidebarService]
})
export class MainNavbarComponent  implements OnInit  {

  @Output() showSidebar: EventEmitter<boolean> = new EventEmitter();

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

}
