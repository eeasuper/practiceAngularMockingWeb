import {ViewChild,ElementRef,Input, Directive, Renderer2,OnChanges,HostListener } from '@angular/core';
 import {Router} from '@angular/router';

import {Observable} from 'rxjs'

@Directive({
  selector: '[appRightNav]'
})
export class RightNavDirective implements OnChanges {
  private index: number;
  private subtitles: Map<number, string> = new Map<number,string>();
  private pageYOfTitles: number[];
  private titles: string[];

  private pageY: number;
  private pageYEnd:number;


  @Input('index') set indexToSet(v:number){
    this.index = v;
  }
  @Input('subtitles') set subtitlesToSet(v:Map<number,string>){
    this.subtitles = v;
  }
  @Input('pageYs') set pageYsToSet(v:number[]){
    this.pageYOfTitles = v;
  }
  @Input('titles') set titlesToSet(v:string[]){
    this.titles = v;
  }


  constructor(private renderer: Renderer2, private element: ElementRef) {

  }

  ngOnChanges(){
     //-----NOTE: here we first check if the index of this element is included in one of the keys of the Map, subtitles. If it is not included, it is not a subtitle. This helps seperate between subtitles and titles.
    if(this.subtitles.get(this.index)){
       this.renderer.addClass(this.element.nativeElement, 'subtitles');
    }
    //-----NOTE: here we add the class, main-title,if this element happens to be the very first element in the list. 'active' needs to be set here because it doesn't get added by the HostListener above when view is first rendered.
    if(this.index===0){
      this.renderer.addClass(this.element.nativeElement, 'main-title');
    }
  }


}