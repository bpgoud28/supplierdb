import { Pipe, PipeTransform } from '@angular/core';
import {Supplier} from '../../searchsupplier/searchsupplier.component';

@Pipe({
  name: 'searchgrid',
  pure: false
})

export class SortPipe implements PipeTransform {
  getProperty(object: any, path: string): any {
    let parts = path.split("."),
      length = parts.length,
      i,
      property = object || this;
    for (i = 0; i < length; i++) {
      property = property[parts[i]];
    }
    return property;
  }
  transform(value: any, path: string) {
    if (value) {
      return value.sort((a, b) => {
        var firstElement = this.getProperty(a, path);
        var secondElement = this.getProperty(b, path);
        if (firstElement < secondElement) {
          return -1;
        }
        if (firstElement > secondElement) {
          return 1;
        }
        return 0;
      });
    }
  }
}
