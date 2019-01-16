import { Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {Router,NavigationStart} from '@angular/router';

const routes :string[] = ["/docs","/api","/guide"]

@Injectable({
  providedIn: 'root'
})
export class RightNavService{
  //-----NOTE:When the application is done, putting all of these subjects into an object may improve performance. Because then ngOnChanges won't get called so much.

  showingSubject:Subject<boolean> = new Subject<boolean>();
  showing$:Observable<boolean>= this.showingSubject.asObservable();

  titlesSubject: Subject<string[]> = new Subject<string[]>();
  titles$:Observable<string[]>= this.titlesSubject.asObservable();

  subtitlesSubject: Subject<Map<number,string[]>> = new Subject<Map<number,string[]>>();
  subtitles$:Observable<Map<number,string[]>> = this.subtitlesSubject.asObservable();

  pageYOfTitlesSubject: Subject<number[]> = new Subject<number[]>();
  pageYOfTitles$:Observable<number[]> = this.pageYOfTitlesSubject.asObservable();

  urlSubject: Subject<string> = new Subject<string>();
  url$:Observable<string> = this.urlSubject.asObservable();

  constructor(private router:Router) {
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationStart) {
        if(this.toShow(events.url)){
          //null
        }else {
          this.showingSubject.next(false);
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
