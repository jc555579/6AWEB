import { Component, OnInit } from '@angular/core'; // Added OnInit interface
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { Products } from './products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  public employees: {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
  }[] = [];

  public products: {
    pId: string,
    pName: string,
    pDescription: string,
    pPrice: number,
  }[] = [];

  constructor(
    private _employeeService: Employee,
    private _productsService: Products
  ) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productsService.getProducts();
  }
}
