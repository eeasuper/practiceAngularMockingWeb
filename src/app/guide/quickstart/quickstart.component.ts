import { Component, OnInit,AfterViewInit,ViewChild,ElementRef } from '@angular/core';
import {RightNavService} from '../../right-nav/right-nav.service';
@Component({
  selector: 'app-quickstart',
  templateUrl: './quickstart.component.html',
  styleUrls: ['./quickstart.component.css']
})
export class QuickstartComponent implements OnInit,AfterViewInit{

  @ViewChild('gettingStarted') private gettingStarted:ElementRef;
  @ViewChild('prerequisites') private prerequisites:ElementRef;
  @ViewChild('nodejs') private nodejs:ElementRef;
  @ViewChild('npmPackageManager') private npmPackageManager:ElementRef;
  @ViewChild('step1InstallTheAngularCli') private step1InstallTheAngularCli:ElementRef;
  //-----Note:'!sub! ' marks the title as a subtitle.
  //-----Note: when adding !sub!, there has to be a space after !sub!.
  titles: string[] = ["Getting started", "Prerequisites", "!sub! Node.js", "!sub! npm package manager", "Step 1: Install the Angular CLI"]
  pageYOfTitles: number[] = []
  
  constructor(private rightnavService:RightNavService) { }

  ngOnInit() {
     //-----Note: the order pushed in must be in order, aligning with titles array.
   this.pageYOfTitles.push(this.gettingStarted.nativeElement.offsetTop);
   this.pageYOfTitles.push(this.prerequisites.nativeElement.offsetTop);
   this.pageYOfTitles.push(this.nodejs.nativeElement.offsetTop);
   this.pageYOfTitles.push(this.npmPackageManager.nativeElement.offsetTop);
   this.pageYOfTitles.push(this.step1InstallTheAngularCli.nativeElement.offsetTop);

   this.pageYOfTitles = this.pageYOfTitles.map((v)=>{
     v -= 64;
     return v;
   })
  }
  ngAfterViewInit(){
    this.rightnavService.titlesSubject.next(this.titles);
    this.rightnavService.showingSubject.next(true);
    this.rightnavService.pageYOfTitlesSubject.next(this.pageYOfTitles);
    this.rightnavService.urlSubject.next("/guide/quickstart")
  }
}
