import { Injectable ,Input, Output,EventEmitter} from '@angular/core';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSideBarService {

  isShowing:boolean;

  constructor(){
    this.isShowing = false;
  }

  // isShowingChange: Subject<boolean> = new Subject<boolean>();

  // showSidebar(val:boolean){
  //   this.isShowingChange.next(true);
  // }
  // constructor(){
  //   this.isShowingChange.subscribe((value)=>{
  //     this.isShowing= value;
  //   })
  // }
}
