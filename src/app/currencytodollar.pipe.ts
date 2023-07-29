import { Pipe, PipeTransform } from '@angular/core';



  @Pipe({
    name: 'rupeesToCurrency'
  })
  export class RupeesToCurrencyPipe implements PipeTransform {
    transform(value: number, exchangeRate: number = 1, decimalPlaces: number = 2): string {
      if (isNaN(value) || isNaN(exchangeRate)) {
        return 'Invalid value or exchange rate';
      }
  
      const convertedValue = value / exchangeRate;
      return `${convertedValue.toFixed(decimalPlaces)} ${this.getCurrencySymbol()}`;
    }
  
    private getCurrencySymbol(): string {
      // You can modify this method to handle different currencies and return their symbols
      return '$'; // For US dollars
    }
  }
  


