import { Component, OnInit,AfterViewInit } from '@angular/core';
import {RightNavService} from '../../right-nav/right-nav.service';
@Component({
  selector: 'app-quickstart',
  templateUrl: './quickstart.component.html',
  styleUrls: ['./quickstart.component.css']
})
export class QuickstartComponent implements OnInit,AfterViewInit {
  //-----Note:'!sub! ' marks the title as a subtitle.
  //-----Note: when adding !sub!, there has to be a space after !sub!.
  titles: string[] = ["Getting started", "Prerequisites", "!sub! Node.js", "!sub! npm package manager", "Step 1: Install the Angular CLI"]
  pageYOfTitles: number[] = [5,50,100,150,200]

  constructor(private rightnavService:RightNavService) { }

  ngOnInit() {
    // this.rightnavService.titlesSubject.next(this.titles);
    // this.rightnavService.showing.next(true);
  }
  ngAfterViewInit(){
    this.rightnavService.titlesSubject.next(this.titles);
    this.rightnavService.showingSubject.next(true);
    this.rightnavService.pageYOfTitlesSubject.next(this.pageYOfTitles);
    this.rightnavService.urlSubject.next("/guide/quickstart")
  }

  ngOnDestroy(){
    // console.log("destroyed")
  }
}
