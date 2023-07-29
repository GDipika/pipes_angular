import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    pipes: string = 'pipes in angular';
    // price: number = 12;
  value='hello world';
    // marks: number = 85;
    // totalMarks: number = 100;
    priceInRupees: number = 1000;
    users: any[] = [
      { id: 101, name: 'dipika', place: 'hyderbad', dob: new Date('5/25/1998') },
  
      { id: 101, name: 'jinnu', place: 'Delhi', dob: new Date('9/13/1997') },
  
      { id: 101, name: 'raji', place: 'hyderbad', dob: new Date('12/05/1997')},
    ];
  }