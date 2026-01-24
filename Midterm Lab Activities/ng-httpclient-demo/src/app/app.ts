import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Httpclient } from './httpclient';   
import { User } from './user.model';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],   
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  httpusers: User[] = [];
  products: Product[] = [];

  constructor(private httpclient: Httpclient) {}

  ngOnInit(): void {
    this.httpclient.getUsersRemotely().subscribe((data: User[]) => {
      this.httpusers = data;
      console.log('Users loaded:', data);
    });

    this.httpclient.getProductsRemotely().subscribe((data: Product[]) => {
      this.products = data;
      console.log('Products loaded:', data);
    });
  }
}