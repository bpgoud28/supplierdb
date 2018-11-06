import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'dateformat'})

export class DateFormatPipe implements PipeTransform {
  transform(value: string, format: string): string {
    if(format === 'yyyy-mm-dd' && value){
      return value.split('/').reverse().reduce((a,e) => (a+'-'+e));
    }
  }
}
