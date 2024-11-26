import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addCircle,
  calendarOutline,
  cartOutline,
  locationOutline,
  removeCircle,
  ticket,
} from 'ionicons/icons';
import { EventInterface } from '@core/shared/@types/event';
import { GetEventDate } from 'src/core/common/utils/date/getEventDate';
import { EventsService } from '../services/events.service';
import { getUserId } from '@core/common/utils/getUserId';

@Component({
  standalone: true,
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  imports: [
    IonLabel,
    IonItem,
    IonList,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonCard,
    IonText,
    IonButton,
    IonBackButton,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonIcon,
    IonCardSubtitle,
    NgIf,
    RouterLink,
  ],
})
export class EventDetailComponent implements OnInit {
  id: string = '';
  event!: EventInterface;
  isParticipant: boolean = false;
  userId = getUserId();
  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly eventService: EventsService,
  ) {
    addIcons({
      calendarOutline,
      locationOutline,
      cartOutline,
      ticket,
      removeCircle,
      addCircle,
    });
  }

  formatDate(startDate: Date, endDate: Date) {
    return GetEventDate(String(startDate), String(endDate));
  }

  signInEvent() {
    this.eventService
      .signInEvent({ userId: this.userId, eventId: this.event?.id ?? '' })
      .subscribe({
        next: (event) => {
          console.log(event);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.eventService
      .getDataById(`event/${this.id}`)
      .subscribe((event: EventInterface) => {
        this.event = event;
        console.log(event);

        this.eventService
          .checkUserEventIsSub(this.userId, event.id ?? '')
          .subscribe((isParticipant) => {
            this.isParticipant = isParticipant;
            console.log('is participant', this.isParticipant);
          });
      });
  }
}
