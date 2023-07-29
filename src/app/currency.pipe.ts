import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number): string {
    // Format the number as a currency value with two decimal places
    return `$${value.toFixed(2)}`;
  }

}
