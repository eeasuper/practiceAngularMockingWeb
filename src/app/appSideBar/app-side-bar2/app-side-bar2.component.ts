import { Component, ViewChild,Input, OnInit,ElementRef,Renderer2,OnChanges,ChangeDetectorRef } from '@angular/core';

import {AppSideBarService} from "../../app-side-bar.service";

@Component({
  selector: 'app-side-bar2',
  templateUrl: './app-side-bar2.component.html',
  styleUrls: ['./app-side-bar2.component.css'],
  providers:[AppSideBarService]
})
export class AppSideBar2Component implements OnInit,OnChanges {
  @Input('isSbShowing') private isSbShowing:boolean;
  @ViewChild('navCon') private sidenavCon:ElementRef
  titles= {
    one: {name:"Getting Started",description:"A brief introduction to Angular and Angular CLI essentials"},
    two:{
      name:"Tutorial",
      description:"The Tour of Heroes tutorial takes you through the steps of creating an Angular application in TypeScript.",
      children:{
        child1: {
          name:"Introduction",
          description:"Introduction to the Tour of Heroes tutorial"
        },
        child2:{
          name:"The Application Shell",
          description:"Creating the application shell"
        },
        child3:{
          name:"1. The Hero Editor",
          description:"Part 1: Build a simple hero editor"
        },
        child4:{
          name:"2. Displaying a List",
          description:"Part 2: Build a master/detail page with a list of heroes."
        },
        child5:{
          name:"3. Master/Detail Components",
          description: "Part 3: Refactor the master/detail view into separate components."
        },
        child6: {
          name:"4. Services",
          description:"Part 4: Create a reusable service to manage hero data."
        },
        child7: {
          name:"5. Routing",
          description:"Part 5: Add the Angular router and navigate among the views."
        },
        child8:{
          name:"6. HTTP",
          description:"Part 6: Use HTTP to retrieve and save hero data."
        }
    },
    },
    three:{name:"Fundamentals", description:"null",children:{
        child1: {
          name:"Introduction",
          description:"Introduction to the Tour of Heroes tutorial"
        },
        child2:{
          name:"The Application Shell",
          description:"Creating the application shell"
        },
        child3:{
          name:"1. The Hero Editor",
          description:"Part 1: Build a simple hero editor"
        },
        child4:{
          name:"2. Displaying a List",
          description:"Part 2: Build a master/detail page with a list of heroes."
        },
        child5:{
          name:"3. Master/Detail Components",
          description: "Part 3: Refactor the master/detail view into separate components."
        },
        child6: {
          name:"4. Services",
          description:"Part 4: Create a reusable service to manage hero data."
        },
        child7: {
          name:"5. Routing",
          description:"Part 5: Add the Angular router and navigate among the views."
        },
        child8:{
          name:"6. HTTP",
          description:"Part 6: Use HTTP to retrieve and save hero data."
        }
    },
  }
  }
  urls={
    one: {
      self: "/guide/quickstart"
    },
    two: {
      self:"/guide/quickstart",
      children:{
        child1: {self:"/docs"},
        child2: {self:"/"},
        child3: {self:"/"},
        child4: {self:"/"},
        child5: {self:"/"},
        child6: {self:"/"},
        child7: {self:"/"},
        child8: {self:"/"}
      }
    },
    three: {
      self:"/guide/quickstart",
      children:{
        child1: {self:"/docs"},
        child2: {self:"/"},
        child3: {self:"/"},
        child4: {self:"/"},
        child5: {self:"/"},
        child6: {self:"/"},
        child7: {self:"/"},
        child8: {self:"/"}
      }
    }
  }

  isSidebarShowing:boolean;

  constructor(private sidebarService:AppSideBarService, private renderer:Renderer2, private element:ElementRef,private cdRef:ChangeDetectorRef) {
    // this.isSidebarShowing = true;
  }

  ngOnInit() {
    this.sidebarService.isShowing$.subscribe((val)=>{
      // console.log("appsidebar change detected")
      this.isSidebarShowing = val;
      this.cdRef.detectChanges();
    })
  }

  ngOnChanges(){
    if(!this.isSbShowing){
      this.renderer.removeClass(this.sidenavCon.nativeElement,'show');
      this.renderer.addClass(this.sidenavCon.nativeElement,'hide');
    }
    if(this.isSbShowing){
      this.renderer.removeClass(this.sidenavCon.nativeElement,'hide');
      this.renderer.addClass(this.sidenavCon.nativeElement,'show');
    }
  }

}
