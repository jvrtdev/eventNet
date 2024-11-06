import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { getUserId } from '@core/common/utils/getUserId';
import { ToastComponent } from '@core/shared/components/toast.component';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { EventsService } from '../../services/events.service';

@Component({
  standalone: true,
  selector: 'create-event-component',
  templateUrl: './create-event.component.html',
  imports: [
    IonContent,
    IonHeader,
    IonButton,
    IonToolbar,
    IonTitle,
    IonItem,
    IonBackButton,
    IonButtons,
    ReactiveFormsModule,
  ],
})
export class CreateEventComponent implements OnInit {
  event!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly eventService: EventsService,
    private toast: ToastComponent,
    private router: Router
  ) {}

  createEvent() {
    if (this.event.valid) {
      console.log(this.event.value);

      this.eventService
        .postData('event', { userId: getUserId(), ...this.event.value })
        .subscribe({
          next: (response) => {
            this.toast.setToast({
              label: 'Evento criado com sucesso!',
              icon: 'checkbox',
              color: 'success',
            });
            this.router.navigate(['/event', response.id]);
            console.log(response);
          },
          error: (error) => {
            this.toast.setToast({
              label: error.message,
              icon: 'close-circle',
              color: 'danger',
            });
            console.log(error);
          },
        });
    }
  }

  ngOnInit(): void {
    this.event = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      start_datetime: ['', Validators.required],
      end_datetime: ['', Validators.required],
      location: ['', Validators.required],
    });
  }
}
