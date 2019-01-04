import { Component, OnInit} from '@angular/core';
import {Router,NavigationStart,ActivatedRoute} from '@angular/router';
import {AppSideBarService} from './app-side-bar.service';
// import {AppSideBarComponent} from './appSideBar/app-side-bar/app-side-bar.component';

const routes :string[] = ["/docs","/api","/guides"]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppSideBarService]
})
export class AppComponent implements OnInit{

  isShowing:boolean;

  constructor(private router:Router,private sidebarService:AppSideBarService){
  }

  ngOnInit(){
    this.sidebarService.isShowingChange.subscribe((val)=>{
      this.isShowing = val;
    })
    // this.router.events.subscribe((events) => {
    //   if (events instanceof NavigationStart) {
    //     if (events.url === '/docs' || events.url === '/home') {
    //       this.isShowing = true;
    //     } else {
    //       this.isShowing = false;
    //     }
    //   }
    // })
  }

  // toShow(url:string):boolean{
  //   routes.forEach((val,ind)=>{
  //     if(val === url || val.startsWith(url)){
  //       //but return false if the page is not found...
  //       return true;
  //     }
  //   });
  //   return false;
  // }
}
