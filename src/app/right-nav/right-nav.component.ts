import {Component, OnInit,Input,OnChanges,HostListener,ElementRef,Renderer2 } from '@angular/core';
import {RightNavService} from './right-nav.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.css']
})
export class RightNavComponent implements OnInit,OnChanges {

  @Input('rightnavChanged') private rightnavChanged:boolean = false;
  //-----Note: number indicates the index of the title in titles:string[]. string indicates the subtitle.
  subtitles: Map<number, string> = new Map<number,string>();
  @Input('titles') private titles:string[];
  @Input('pageYs') private pageYOfTitles:number[];

  @Input('url') private url:string;
  constructor(private rightnavService:RightNavService, private element: ElementRef, private renderer:Renderer2) { }

  @HostListener('window:scroll',['$event'])
  updateHeight(event){
    //This hostListener is to make rightNav scrollable when it gets too long.

    //-----NOTE: 393 px is the height of the footer, 64px is the height of the upper navbar.
    let documentHeight = document.body.clientHeight;
    let pageY = event.pageY +393+64;
    //-----NOTE: The closer event.pageY gets to documentHeight, the lower maxheight should be.
    this.renderer.setStyle(this.element.nativeElement, "max-height", documentHeight - pageY + "px");
  }

  ngOnInit() {
  }

  ngOnChanges(){
    this.setSubtitles(this.titles);
  }

  setSubtitles(titles:string[]){
    this.titles = titles;
    titles.forEach((v,i)=>{
      if(v.startsWith("!sub!")){
        let newVal = v.replace("!sub! ", "");
        this.subtitles.set(i, newVal);
      }
    })
  }

}
