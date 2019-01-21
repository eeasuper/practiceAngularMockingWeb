import { ElementRef,Renderer2, Component, OnInit,Input,OnChanges,ViewChild } from '@angular/core';

@Component({
  selector: 'app-sub-menu2',
  templateUrl: './sub-menu2.component.html',
  styleUrls: ['./sub-menu2.component.css']
})
export class SubMenu2Component implements OnInit,OnChanges {
  @Input('titles') private titles:object;
  @Input('urls') private urls:object;
  @ViewChild('listCon') private listCon:ElementRef;
  @ViewChild('icon') private icon:ElementRef;
  objectValues = Object.values;
  collapsed:boolean = true;

  constructor(private renderer:Renderer2) { }

  doCollapse(){
    if(this.collapsed){
      this.renderer.removeClass(this.listCon.nativeElement,'collapse')
      this.renderer.addClass(this.listCon.nativeElement, 'expand');
      this.renderer.removeClass(this.icon.nativeElement, 'rotate-collapse');
      this.renderer.addClass(this.icon.nativeElement, 'rotate-expand');
      this.collapsed = !this.collapsed;
    }else if(!this.collapsed){
      this.renderer.removeClass(this.listCon.nativeElement, 'expand');
      this.renderer.addClass(this.listCon.nativeElement, 'collapse');
      this.renderer.removeClass(this.icon.nativeElement, 'rotate-expand');
      this.renderer.addClass(this.icon.nativeElement, 'rotate-collapse');
      this.collapsed = !this.collapsed;
    }
  }

  ngOnInit() {
  }
  ngOnChanges(){
  }
}
