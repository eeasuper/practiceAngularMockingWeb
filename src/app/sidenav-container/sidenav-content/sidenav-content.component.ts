import { ElementRef,Component, OnInit,Input,OnChanges,Renderer2,ViewChild } from '@angular/core';
import {trigger, state, style, animate,transition} from '@angular/animations';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.css']
})
export class SidenavContentComponent implements OnInit,OnChanges {
  @Input('isSbShowing') private isSbShowing:boolean;
  @ViewChild('routerCon') private routerCon: ElementRef;
  isSidebarShowing:boolean;

  constructor(private renderer:Renderer2){
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

  }

  ngOnInit() {
  }

}
