import {ChangeDetectorRef,OnDestroy,Renderer2,ViewChild, Component, OnInit,ElementRef,OnChanges } from '@angular/core';
import {RightNavService} from '../right-nav.service';
import {Subject} from 'rxjs'

@Component({
  selector: 'app-lis',
  templateUrl: './lis.component.html',
  styleUrls: ['./lis.component.css']
})
export class LisComponent implements OnInit,OnDestroy {
  @ViewChild('ul') ul:ElementRef;

  // subtitlesSubject: Subject<Map<number, string[]>>= new Subject<Map<number, string[]>>();
  titlesSubject: Subject<string[]> = new Subject<string[]>();


  constructor(private cd : ChangeDetectorRef,private renderer:Renderer2, private element:ElementRef,private rightnavService:RightNavService) {}

  ngOnInit() {
    console.log("inited");
    this.rightnavService.titles$.subscribe((val)=>{
      console.log("titles~~")
      console.log(val);
      this.titlesSubject.next(val);
      this.cd.detectChanges();
    })

    this.titlesSubject.subscribe((value)=>{
      let existSubtitles: boolean = false;
      let indexOfTitle:number = null;
      let subtitles :Map<number, string[]>= new Map<number, string[]>();
      let newArr = value.reduce((acc,cur,ind,arr)=>{
          if(cur.startsWith("!sub!")){
            existSubtitles = true;
            let newCur = cur.replace("!sub! ","");
            if(subtitles.has(indexOfTitle)){
              subtitles.get(indexOfTitle).push(newCur);
            }else if(!subtitles.has(indexOfTitle)){
              indexOfTitle = (ind -1);
              subtitles.set(indexOfTitle, new Array(newCur));
            }
            acc.push(newCur);
            return acc;
          }
          acc.push(cur);
          return acc;
        },[])

      newArr.forEach((val, ind)=>{
        console.log("1: "+val)
        let li = this.renderer.createElement("li");
        this.renderer.setValue(li,val);
        this.renderer.appendChild(this.ul.nativeElement, li);
        if(existSubtitles){

          let a = Array.from(subtitles.keys()).filter((v,i)=>{
            console.log("2: "+v)
            return ind = v;
          });

          console.log(a);
          if(a){
            subtitles.get(a[0]).forEach((v)=>{
              console.log("3: "+v)
              let subli= this.renderer.createElement("li");
              this.renderer.addClass(subli, 'subtitle');
              this.renderer.setValue(subli, v);
              this.renderer.appendChild(this.ul.nativeElement, li);
            })
          }
          a = null;
        }
      })
    })
  }

  ngOnDestroy(){
    //I have no idea if this will work.
    //OnDestroy is here to reset isSubtitles value to false when routing changes.
    console.log("OnDestroyLi")

  }

}
