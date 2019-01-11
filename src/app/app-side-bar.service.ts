import { Injectable ,Input, Output,EventEmitter} from '@angular/core';
import {Router,NavigationStart,ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';

const routes :string[] = ["/docs","/api","/guide"]

@Injectable({
  providedIn: 'root'
})
export class AppSideBarService{

  isShowingChange: Subject<boolean> = new Subject<boolean>();
  isButtonShowingChange: Subject<boolean> = new Subject<boolean>();

  constructor(private router:Router){
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationStart) {
        if(this.toShow(events.url)){
          this.isShowingChange.next(true);
          this.isButtonShowingChange.next(true);
        }else {
          this.isShowingChange.next(false);
          this.isButtonShowingChange.next(false);
        }
      }
    })
  }


  toShow(url:string):boolean{
    let bool: boolean= false;
    routes.forEach((val,ind)=>{
      if(url.includes(val) || url.startsWith(val)){
       //I think .includes is not a good way to implement in production stage.
        bool = true;
        return;
      }
    });
    return bool;
  }

}
