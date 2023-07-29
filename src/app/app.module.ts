import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomPipe } from './custom.pipe';
import { RupeetocurrencyPipe } from './rupeetocurrency.pipe';
// import { PercentagePipe } from './percentage.pipe';
// import { TitlecasePipe } from './titlecase.pipe';
import { CurrencyPipe } from './currency.pipe';
import { RupeesToCurrencyPipe } from './currencytodollar.pipe';
import { CurrencytoeuroPipe } from './currencytoeuro.pipe';


@NgModule({
  declarations: [
  AppComponent,
  CustomPipe,
  CurrencyPipe,
  RupeetocurrencyPipe,
  RupeesToCurrencyPipe,
  CurrencytoeuroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
