import { Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RightNavService {
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

  constructor() {
  }
}
