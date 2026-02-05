import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html', 
  styleUrls: ['./contact.css']
})
export class Contact {
  private fb = inject(FormBuilder);

  // Define the form with some default values
  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    subject: ['General Inquiry'],
    message: ['', Validators.required]
  });

  onSubmit() {
    alert('Form Submitted locally! Check the console for data.');
    console.log('Submitted Data:', this.contactForm.value);
  }
}