import { Injectable ,Input, Output,EventEmitter} from '@angular/core';
import {Router,NavigationStart,ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';

const routes :string[] = ["/docs","/api","/guides"]

@Injectable({
  providedIn: 'root'
})
export class AppSideBarService{

  isShowingChange: Subject<boolean> = new Subject<boolean>();
  isButtonShowingChange: Subject<boolean> = new Subject<boolean>();

  constructor(private router:Router){
    // this.isShowing=false;
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationStart) {
        if (events.url === '/docs' || events.url === '/home') {
          this.isShowingChange.next(true);
          this.isButtonShowingChange.next(true);
        } else {
          this.isShowingChange.next(false);
          this.isButtonShowingChange.next(false);

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
