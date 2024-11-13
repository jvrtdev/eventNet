import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import ConverterToIso from '@core/common/utils/date/converterToIso';
import { getUserId } from '@core/common/utils/getUserId';
import { ToastComponent } from '@core/shared/components/toast.component';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
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
    IonInput,
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

  ngOnInit(): void {
    this.event = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      start_datetime: ['', Validators.required],
      end_datetime: ['', Validators.required],
      location: ['', Validators.required],
    });
  }
  createEvent() {
    if (this.event.valid) {
      let start_datetime = ConverterToIso(this.event.value.start_datetime);
      let end_datetime = ConverterToIso(this.event.value.end_datetime);
      this.eventService
        .postData('event', {
          userId: getUserId(),
          description: this.event.value.description,
          start_datetime: start_datetime,
          end_datetime: end_datetime,
          title: this.event.value.title,
          location: this.event.value.location,
          image: '',
        })
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
}
