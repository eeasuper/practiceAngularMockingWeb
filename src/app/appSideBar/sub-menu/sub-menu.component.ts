import { Component, OnInit,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit,OnChanges {
  @Input('titles') private titles:object;
  @Input('urls') private urls:object;
  objectValues = Object.values;
  constructor() { }

  ngOnInit() {
    
  }
  ngOnChanges(){
    // console.log("FROM CHANGES:")
    // console.log(this.titles)
    // console.log(this.urls);
  }
}
