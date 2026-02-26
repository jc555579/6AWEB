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
// NEW IMPORTS
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatSliderModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule,
    MatSelectModule, MatSlideToggleModule, MatExpansionModule // Added here
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  formdata!: FormGroup;
  submitted = false;

  // Data for Select component
  countries = ['Philippines', 'United States', 'United Kingdom', 'Canada', 'Australia'];

  // Variables for displaying summary
  userName = ''; email = ''; gender = ''; birthDate!: Date;
  country = ''; subscribe = false; angularSkillLevel = 5;

  minSkillLevel = 1; maxSkillLevel = 10;

  ngOnInit() {
    this.formdata = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      gender: new FormControl('male'),
      country: new FormControl('', Validators.required), // New
      subscribe: new FormControl(false), // New
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
