import { Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RightNavService {

  showingSubject:Subject<boolean> = new Subject<boolean>();
  showing$:Observable<boolean>= this.showingSubject.asObservable();

  // subtitles: Map<number,string[]> = new Map<number,string[]>();

  titlesSubject: Subject<string[]> = new Subject<string[]>();
  titles$:Observable<string[]>= this.titlesSubject.asObservable();

  subtitlesSubject: Subject<Map<number,string[]>> = new Subject<Map<number,string[]>>();
  subtitles$:Observable<Map<number,string[]>> = this.subtitlesSubject.asObservable();

  pageYOfTitlesSubject: Subject<number[]> = new Subject<number[]>();
  pageYOfTitles$:Observable<number[]> = this.pageYOfTitlesSubject.asObservable();

  constructor() {
  }
}
