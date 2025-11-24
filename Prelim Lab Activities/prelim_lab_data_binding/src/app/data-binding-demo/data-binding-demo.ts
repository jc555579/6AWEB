import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding-demo',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './data-binding-demo.html',
  styleUrl: './data-binding-demo.css',
})

export class DataBindingDemo {
  title = 'My First App!';
  description = 'This is my new Angular Application'

  // property data binding
  imageUrl = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';
  w = 50;
  h = 50;
  altText = 'Angular Logo';
  isHighlighted = true;
  textColor = 'blue';
  yourName = '';

  // event binding
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
