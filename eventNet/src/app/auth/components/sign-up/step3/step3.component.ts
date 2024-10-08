import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonText,
  IonTextarea,
  IonToolbar,
} from '@ionic/angular/standalone';
import { SignUpService } from '../sign-up.service';
import { addIcons } from 'ionicons';
import { arrowForwardOutline } from 'ionicons/icons';
import { AuthService } from '@core/services/auth.service';

@Component({
  standalone: true,
  templateUrl: './step3.component.html',
  imports: [
    IonButton,
    IonBackButton,
    IonContent,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonInput,
    IonItem,
    IonList,
    IonText,
    IonTextarea,
    IonButtons,
    ReactiveFormsModule,
  ],
})
export class SignUpStep3Component implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signUpService: SignUpService,
    private readonly authService: AuthService
  ) {
    addIcons({arrowForwardOutline})
  }

  step3Form!: FormGroup

  nextStep() {
    console.log(this.step3Form.value);
    if (this.step3Form.valid) {
      this.signUpService.setStep3Data(this.step3Form.value);
      const data = this.signUpService.getFormData()
      this.authService.create(data).subscribe({
        next: (response) => {
          console.log("Login bem-sucedido", response.token)
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error)()
        }
      })
    }
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  ngOnInit(): void {
    this.step3Form = this.fb.group({
      bio: ['', [Validators.maxLength(80)]],
      avatar: [''],
      github: [''],
      linkedin: [''],
      instagram: [''],
    })
  }
}
