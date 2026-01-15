// import { Component, OnInit } from '@angular/core';
// // Added CurrencyPipe to the list
// import { DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe, CurrencyPipe, SlicePipe, DecimalPipe } from '@angular/common';
// // import { interval, map } from 'rxjs';

// @Component({
//   selector: 'app-pipes-demo',
//   standalone: true,
//   imports: [DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe, CurrencyPipe, SlicePipe, DecimalPipe],
//   templateUrl: './pipes-demo.html',
//   styleUrl: './pipes-demo.css',
// })

// export class PipesDemo implements OnInit {
//   // time$ = interval(1000).pipe(
//   //   map(() => new Date())
//   // );

//   // price: number = 20000;

//   // Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

//   decimalNum1: number = 8.7589623;
//   decimalNum2: number = 5.43;
//   ngOnInit() { }

// }

import { Component, OnInit } from '@angular/core';
import {
  DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe,
  CurrencyPipe, SlicePipe, DecimalPipe,
  PercentPipe, JsonPipe, TitleCasePipe // Added 3 new pipes
} from '@angular/common';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe,
    CurrencyPipe, SlicePipe, DecimalPipe,
    PercentPipe, JsonPipe, TitleCasePipe // Added to imports
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo implements OnInit {
  presentDate = new Date();
  time$ = interval(1000).pipe(map(() => new Date()));

  price: number = 20000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  decimalNum1: number = 8.7589623;

  // New Data for the 3 new pipes
  completionRate: number = 0.854;
  userObject = { id: 101, name: 'joemar', role: 'developer' };
  rawText: string = 'joemar catipon';

  ngOnInit() { }
}
