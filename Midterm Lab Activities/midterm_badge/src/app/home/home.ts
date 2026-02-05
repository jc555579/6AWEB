import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyService } from '../my-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html', 
  styleUrls: ['./home.css']
})
export class Home {
  // Using the modern 'inject' function (Angular 16+)
  service = inject(MyService);
}