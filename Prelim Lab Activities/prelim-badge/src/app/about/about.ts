import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // MUST HAVE for *ngIf

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html'
})
export class AboutComponent {

  showMore = false;

  learnMore() {
    this.showMore = !this.showMore;
  }
}
