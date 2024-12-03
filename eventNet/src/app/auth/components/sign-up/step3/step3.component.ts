import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from '@core/services/auth.service';
import { FirebaseService } from '@core/services/firebase/firebase.service';
import { ToastComponent } from '@core/shared/components/toast.component';
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
import { addIcons } from 'ionicons';
import { arrowForwardOutline } from 'ionicons/icons';
import { SignUpService } from '../sign-up.service';

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
    private readonly authService: AuthService,
    private toast: ToastComponent,
    private readonly firebaseService: FirebaseService
  ) {
    addIcons({ arrowForwardOutline });
  }

  step3Form!: FormGroup;
  avatarUrl!: string;

  async openCamera() {
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    const imgUrl = await this.firebaseService.uploadImage(
      photo.dataUrl ?? '',
      `avatar_${Math.floor(Math.random() * 10000)}`
    );

    this.avatarUrl = imgUrl;
  }

  nextStep() {
    console.log(this.step3Form.value);
    if (this.step3Form.valid) {
      this.signUpService.setStep3Data(this.step3Form.value);
      const data = this.signUpService.getFormData();
      this.authService.create(data).subscribe({
        next: (response) => {
          console.log('Login bem-sucedido', response.token);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error);
          this.toast.setToast({
            label: error.message,
            icon: 'close-circle',
            color: 'danger',
          });
        },
      });
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
    });
  }
}
