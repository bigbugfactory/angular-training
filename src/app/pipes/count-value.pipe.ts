import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countValue'
})
export class CountValuePipe implements PipeTransform {

  transform(value: number[]): number {
    let initialValue = 0;
    return value.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
  }
}
