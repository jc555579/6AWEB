import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  getProducts() {
    return [
      {
        pId: 'P-101',
        pName: 'Logitech Mouse',
        pDescription: '6 Button Mechanical Mouse',
        pPrice: 899.00
      },
      {
        pId: 'P-102',
        pName: 'JBL BT Speaker',
        pDescription: 'Waterproof Radio 360 Surround',
        pPrice: 1099.00
      },
      {
        pId: 'P-103',
        pName: 'Mechanical KeyBoard',
        pDescription: 'Hot-swappable RGB Backlit',
        pPrice: 2395.00
      },
      {
        pId: 'P-104',
        pName: 'Oculus Meta',
        pDescription: 'All-in-one Gaming Headset',
        pPrice: 22450.00
      }
    ];
  }
}
