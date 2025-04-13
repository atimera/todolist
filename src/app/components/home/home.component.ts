import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {DatePickerModule} from 'primeng/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [ReactiveFormsModule, FormsModule, DatePickerModule],
})
export class HomeComponent {
  personForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    usualName: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl(null),
    dateOfDeath: new FormControl(null),
  });

  onSubmit() {
  }
}
