import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtitle'
})
export class SubtitlePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.startsWith("!sub! ")){
      return value.replace("!sub! ", "");
    }else{
      return value;
    }
  }

}
