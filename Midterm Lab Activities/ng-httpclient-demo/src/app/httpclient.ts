import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from './user.model';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class Httpclient {
  private readonly USERS_KEY = 'cached_users';
  private readonly PRODUCTS_KEY = 'cached_products';

  constructor(private http: HttpClient) {}

  getUsersRemotely(): Observable<User[]> {
    const cachedData = localStorage.getItem(this.USERS_KEY);

    if (cachedData) {
      // Return the cached data as an observable
      return of(JSON.parse(cachedData));
    }

    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      tap(users => {
        // Save to localStorage whenever we get fresh data
        localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
      })
    );
  }

  getProductsRemotely(): Observable<Product[]> {
    const cachedData = localStorage.getItem(this.PRODUCTS_KEY);

    if (cachedData) {
      return of(JSON.parse(cachedData));
    }

    return this.http.get<{ products: Product[] }>('https://dummyjson.com/products').pipe(
      map(res => res.products.slice(0, 5)),
      tap(products => {
        localStorage.setItem(this.PRODUCTS_KEY, JSON.stringify(products));
      })
    );
  }

  clearCache(): void {
    localStorage.removeItem(this.USERS_KEY);
    localStorage.removeItem(this.PRODUCTS_KEY);
  }
}
