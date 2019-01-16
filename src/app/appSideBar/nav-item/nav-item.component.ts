import {Renderer2,ElementRef, Component,Input, OnInit,OnChanges,ViewChild,AfterViewInit,OnDestroy} from '@angular/core';
import {NavigationStart,Router} from '@angular/router'
import{Subject, Observable, Subscription} from 'rxjs'

import{AppSideBarService} from '../../app-side-bar.service'
@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit,OnChanges,AfterViewInit,OnDestroy {
  @ViewChild('anchor') private anchor:ElementRef;
  @ViewChild('icon') private icon:ElementRef;
  @Input('title') private title:object;
  @Input('urls') private urls:any;
  @Input('doCollapse') private doCollapse:boolean;
  @Input('level1') private level1:boolean;
  @Input('level2') private level2:boolean;
  private isCollapsed:boolean = false;
  subscription: Subscription;


  constructor( private element:ElementRef, private renderer:Renderer2,private router:Router,private sidebarService:AppSideBarService) { }

  collapse(){
    if(this.isCollapsed){
      // this.renderer.addClass(this.icon.nativeElement, 'spin');
      this.isCollapsed = false;
    }else if(!this.isCollapsed){
      this.isCollapsed = true;
    }
  }
  ngAfterViewInit(){
    //-----NOTE: this line of code HAS to go in ngAfterViewInit because anchor doesn't get rendered until after view! (finally AfterViewInit has become useful)
    //-----NOTE: something to improve next time: make it so that the level-2 elements of sidebar don't have to get Inited every single time I press the button!
    if(this.level1 &&this.anchor){
      this.renderer.addClass(this.anchor.nativeElement, 'level-1');
    }else if(this.level2 &&this.anchor){
      console.log("FADSF")
      this.renderer.addClass(this.anchor.nativeElement,'level-2');
    }
  }
  ngOnInit() {
    this.subscription= this.router.events.subscribe((events) => {
      if (events instanceof NavigationStart) {
        if(this.urls.self.includes(events.url) && this.anchor && this.urls.self){
          this.renderer.addClass(this.anchor.nativeElement,'selected');
        }else if(!this.urls.self.includes(events.url) && this.anchor && this.urls.self){
          this.renderer.removeClass(this.anchor.nativeElement,'selected');
        }
      }
    })
  }

  ngOnChanges(){
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
