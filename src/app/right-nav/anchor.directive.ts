import {Input, Directive,ElementRef,Renderer2,OnChanges,HostListener} from '@angular/core';

@Directive({
  selector: '[appAnchor]'
})
export class AnchorDirective implements OnChanges{
  private titles: string[];
  private index: number;
  private url: string;
  private pageYOfTitles: number[];
  private pageY: number;
  private pageYEnd:number;

  @Input('index') set indexToSet(v:number){
    this.index = v;
  }
  @Input('titles') set titlesToSet(v:string[]){
    this.titles = v;
  }
  @Input('url') set urlToSet(v:string){
    this.url = v;
  }
  @Input('pageYs') set pageYsToSet(v:number[]){
    this.pageYOfTitles = v;
  }


  @HostListener('window:scroll',['$event'])
  onScroll(event){
    //-----NOTE: In this function onScroll, we apply the blue dot beside the title according to its position.
    if(event.pageY>=this.pageY || (event.pageY <this.pageYEnd)){
      this.renderer.addClass(this.element.nativeElement, 'active');
    }
    if(event.pageY>this.pageYEnd || (event.pageY<this.pageY)){
      this.renderer.removeClass(this.element.nativeElement, 'active');
    }
    if(this.index===0&&(event.pageY<=this.pageY)){
      //-----NOTE:we add 'active' to the first title because it gets erased when user scrolls to the very top.
      this.renderer.addClass(this.element.nativeElement, 'active');
    }
    //-----NOTE: I'm concerned with how much this function affects performance. If we add console.log to each if statement here, it gets called every time the user scrolls. Make adjustments if possible.
  }

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  replaceAll(str, find, replace) {
    function escapeRegExp(str) {
      return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
  }

  ngOnChanges(){
      //-----NOTE: here we set the position of the title on the variable pageY. We also set where the section of that title ends in pageYEnd.
    this.pageYOfTitles.forEach((val,ind)=>{
      if(ind === this.index){
        this.pageY = val;
      }
      if(ind === (this.index+1)){
        this.pageYEnd = val;
      }
    })
    if(this.index === 0){
      this.renderer.addClass(this.element.nativeElement, 'active');
    }
    let title = this.titles.filter((val, ind)=>{
        return ind === this.index;
      })[0]
    //-----NOTE: should just use Regexes.
    let titleReplaced = this.replaceAll(this.replaceAll(this.replaceAll(title," ","-"),":","-"),".","").toLowerCase();
    if(titleReplaced.startsWith("!sub!")){
      titleReplaced= titleReplaced.replace("!sub!-", "");
    }
    this.renderer.setAttribute(this.element.nativeElement,'href', this.url+"#"+titleReplaced)
    this.renderer.setProperty(this.element.nativeElement, 'fragment', titleReplaced);
  }


}
