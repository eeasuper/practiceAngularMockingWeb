import {ElementRef,Input, Directive, Renderer2,OnChanges,HostListener } from '@angular/core';
import {Observable} from 'rxjs'

@Directive({
  selector: '[appRightNav]'
})
export class RightNavDirective implements OnChanges {
  private index: number;
  private subtitles: Map<number, string> = new Map<number,string>();
  private pageYOfTitles: number[];

  @Input('index') set indexToSet(v:number){
    this.index = v;
  }
  @Input('subtitles') set subtitlesToSet(v:Map<number,string>){
    this.subtitles = v;
  }
  @Input('pageYs') set pageYsToSet(v:number[]){
    this.pageYOfTitles = v;
  }

  @HostListener('window:scroll',['$event'])
  onScroll(event){
    
    if(event.pageY>100){
      this.renderer.addClass(this.element.nativeElement, 'test')
    }
  }

  constructor(private renderer: Renderer2, private element: ElementRef) {
  }

  ngOnChanges(){
    if(this.subtitles.get(this.index)){
       //-----NOTE: using nativeElement directly is discouraged in the API. change this code to something safer if possible.
       this.element.nativeElement.innerText = this.subtitles.get(this.index);
       this.renderer.addClass(this.element.nativeElement, 'subtitles');
    }
    if(this.index===0){
      this.renderer.addClass(this.element.nativeElement, 'main-title');
    }
  }


}