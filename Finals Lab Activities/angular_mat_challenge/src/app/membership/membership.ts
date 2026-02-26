import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
// Additional Components
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatSliderModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule,
    MatSelectModule, MatSlideToggleModule, MatExpansionModule,
    MatCardModule, MatIconModule, MatDividerModule
  ],
  templateUrl: './membership.html',
  styleUrl: './membership.css',
})
export class Membership implements OnInit {
  formdata!: FormGroup;
  submitted = false;
  isDarkMode = false; // Toggle state

  countries = ['Philippines', 'United States', 'United Kingdom', 'Canada', 'Australia'];

  // Requirement: Accept users born in 2006 or earlier
  maxDate = new Date(2006, 11, 31);

  // Summary variables
  userName = ''; email = ''; gender = ''; birthDate!: Date;
  country = ''; subscribe = false; angularSkillLevel = 5;

  ngOnInit() {
    this.formdata = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      // Validation: Min 8 chars, alphanumeric only, starts with a letter
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]{7,}$/)
      ]),
      gender: new FormControl('male'),
      country: new FormControl('', Validators.required),
      subscribe: new FormControl(false),
      birthDate: new FormControl('', Validators.required),
      angularSkillLevel: new FormControl(5)
    });
  }

  onClickSubmit(data: any) {
    if (this.formdata.valid) {
      this.submitted = true;
      this.userName = data.userName;
      this.email = data.email;
      this.gender = data.gender;
      this.country = data.country;
      this.subscribe = data.subscribe;
      this.birthDate = data.birthDate;
      this.angularSkillLevel = data.angularSkillLevel;
    }
  }
}
