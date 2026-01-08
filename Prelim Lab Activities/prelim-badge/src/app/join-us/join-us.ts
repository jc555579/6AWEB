import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for ngModel

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join-us.html'
})
export class JoinUsComponent {
  formData = {
    name: '',
    email: '',
    organization: '',
    message: ''
  };

  onSubmit() {
    console.log('Form Submitted:', this.formData);
    alert('Thank you for joining us!');
  }
}
