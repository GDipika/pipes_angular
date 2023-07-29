import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencytoeuro'
})
export class CurrencytoeuroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
