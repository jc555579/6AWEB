import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule], // Required for DatePipe and UpperCasePipe
  templateUrl: './about.html', 
  styleUrls: ['./about.css']
})
export class About {
  currentTimestamp: Date = new Date();
}