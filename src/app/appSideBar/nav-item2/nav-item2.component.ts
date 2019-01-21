import { Component, OnInit,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-nav-item2',
  templateUrl: './nav-item2.component.html',
  styleUrls: ['./nav-item2.component.css']
})
export class NavItem2Component implements OnInit,OnChanges {
  @Input('url') private url:string;
  @Input('title') private title:object;
  @Input('level') private level:number;
  // @Input('collapse') private collapse:boolean;
  private classes: string;

  constructor() { }

  ngOnInit() {
    if(this.level===1){
      this.classes = "menu-item "+ "level-1";
    }else if(this.level===2){
      this.classes = "menu-item " + "level-2";
    }
  }
  ngOnChanges(){
    // console.log(this.collapse);
  }

}
