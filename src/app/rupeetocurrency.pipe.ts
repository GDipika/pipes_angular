import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupeetocurrency'
})
export class RupeetocurrencyPipe implements PipeTransform {

    transform(value: number, exchangeRate: number): number {
      // Convert rupees to the specified currency using the provided exchange rate
      return value / exchangeRate;
    }

}
