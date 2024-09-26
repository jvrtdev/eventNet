import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { ToastComponent } from '@core/shared/components/toast.component';
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
  IonText,
  IonToast,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForwardOutline } from 'ionicons/icons';

@Component({
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    IonIcon,
    IonButton,
    IonContent,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonText,
    IonInput,
    IonInputPasswordToggle,
    IonItem,
    ReactiveFormsModule,
    IonToast,
  ],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toast: ToastComponent
  ) {
    addIcons({ arrowForwardOutline });
  }

  formLogin!: FormGroup;

  logo = '../../assets/icon/icon.png';

  toasts = [
    {
      label: 'Login bem-sucedido!',
      icon: 'checkbox',
      color: 'success',
    },
    {
      label: 'Erro ao fazer login!',
      icon: 'close-circle',
      color: 'danger',
    },
  ];

  handleLogin() {
    if (this.formLogin.valid) {
      this.authService.login(this.formLogin.value).subscribe({
        next: (response) => {
          console.log('Login bem-sucedido!', response.token);
          this.toast.setToast({
            label: 'Login bem-sucedido!',
            icon: 'checkbox',
            color: 'success',
          });
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error);
          this.toast.setToast({
            label: 'Erro ao fazer login!',
            icon: 'close-circle',
            color: 'danger',
          });
        },
      });
    }
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
