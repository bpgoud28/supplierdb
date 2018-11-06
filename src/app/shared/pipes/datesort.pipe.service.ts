import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchgrid',
  pure: false
})

export class DateSortPipe implements PipeTransform {
  getProperty(object: any, path: string):any {
    let parts = path.split( "." ),
    length = parts.length,
    i,
    property = object || this;
    for ( i = 0; i < length; i++ ) {
      property = property[parts[i]];
    }
    return property;
  }
  transform(value: any, path: string){
    if(value){
      return value.sort((a,b) => {
        var firstElement = new Date(this.getProperty(a,path)).toISOString();
        var secondElement = new Date(this.getProperty(b,path)).toISOString();
        if(firstElement < secondElement) {
          return -1;
        }
        if(firstElement > secondElement) {
          return 1;
        }
        return 0;
      })
    }
  }
}
