import { Injectable ,Input, Output,EventEmitter} from '@angular/core';
import {Router,NavigationStart,ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';

const routes :string[] = ["/docs","/api","/guides"]

@Injectable({
  providedIn: 'root'
})
export class AppSideBarService{

  isShowing:boolean;

  isShowingChange: Subject<boolean> = new Subject<boolean>();

  constructor(private router:Router){
    this.isShowing=false;
    console.log("service constructed");
    this.router.events.subscribe((events) => {
      console.log("app-service")
      if (events instanceof NavigationStart) {
        if (events.url === '/docs' || events.url === '/home') {
          console.log("true");
          this.isShowingChange.next(true);
          this.isShowing=true;
        } else {
          console.log("false");
          this.isShowingChange.next(false);
          this.isShowing=true;
        }
      }
    })
  }


  toShow(url:string):boolean{
    routes.forEach((val,ind)=>{
      if(val === url || val.startsWith(url)){
        //but return false if the page is not found...
        return true;
      }
    });
    return false;
  }

}
