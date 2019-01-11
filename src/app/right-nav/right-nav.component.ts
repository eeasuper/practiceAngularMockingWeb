import {Component, OnInit,Input,OnChanges } from '@angular/core';
import {RightNavService} from './right-nav.service';
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

  constructor(private rightnavService:RightNavService) { }

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
