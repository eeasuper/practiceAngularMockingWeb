import { Component, OnInit} from '@angular/core';
import {Router,NavigationStart,ActivatedRoute} from '@angular/router';
import {AppSideBarService} from './app-side-bar.service';
// import {AppSideBarComponent} from './appSideBar/app-side-bar/app-side-bar.component';
import {trigger, state, style, animate,transition,query} from '@angular/animations';

const routes :string[] = ["/docs","/api","/guides"]

@Component({
  selector: 'app-root',
  animations: [
  //The animation below took almost 3 hours to FIGURE OUT!!! Leaving animation did not work.
    trigger('slideInOut',[
      state('void', style({ width: '100%', position: 'fixed'})),
      state('*', style({position:'fixed', width:'100%'}) ),
      transition('void => *', [
          style({transform: 'translateX(-100%)'}),
          animate('1s linear', style({transform: 'translateX(0%)'}))
        ]),
      transition('* => void', [
        style({transform: 'translateX(0%)'}),
        animate('1s linear', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  providers:[AppSideBarService]
})
export class AppComponent implements OnInit{

  isSidebarShowing:boolean;

  getShowing(sidebar){
    console.log(sidebar);
  }

  constructor(private router:Router,private sidebarService:AppSideBarService){
  }

  ngOnInit(){
    this.sidebarService.isShowingChange.subscribe((val)=>{
      this.isSidebarShowing = val;
    })

  }


}
