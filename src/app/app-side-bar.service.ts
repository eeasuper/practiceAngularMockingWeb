import { Injectable ,Input, Output,EventEmitter,ElementRef} from '@angular/core';
import {Router,NavigationStart,ActivatedRoute} from '@angular/router';
import {Subject,Observable,BehaviorSubject} from 'rxjs';

const routes :string[] = ["/docs","/api","/guide"]

@Injectable({
  providedIn: 'root'
})
export class AppSideBarService{

  isShowingSubject: Subject<boolean> = new Subject<boolean>();
  isShowing$:Observable<boolean> = this.isShowingSubject.asObservable();

  isButtonShowingChange: Subject<boolean> = new Subject<boolean>();

  constructor(private router:Router){
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationStart) {
        if(this.toShow(events.url)){
          this.isShowingSubject.next(true);
          this.isButtonShowingChange.next(true);
        }else {
          this.isShowingSubject.next(false);
          this.isButtonShowingChange.next(false);
        }
      }
    })
    this.isShowingSubject.subscribe((val)=>{
      console.log(val);
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
