import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonList,
  IonText,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForwardOutline } from 'ionicons/icons';
import { SignUpService } from '../sign-up.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './sign-up.component.html',
  imports: [
    IonButton,
    IonHeader,
    IonContent,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonText,
    IonItem,
    IonInput,
    IonInputPasswordToggle,
    IonList,
    IonIcon,
    ReactiveFormsModule,
  ],
})
export class SignUpComponent implements OnInit {
  step1Form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private signUpService: SignUpService,
    private router: Router
  ) {
    addIcons({ arrowForwardOutline });
  }

  ngOnInit(): void {
    this.step1Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      userName: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  nextStep() {
    console.log('invalid')
    if(this.step1Form.valid) {
      this.signUpService.setStep1Data(this.step1Form.value);
      this.router.navigate(['sign-up/address'])
    }
  }
}
