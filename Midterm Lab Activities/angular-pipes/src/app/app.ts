import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesDemo } from './pipes-demo/pipes-demo'; // Import the component class

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PipesDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
