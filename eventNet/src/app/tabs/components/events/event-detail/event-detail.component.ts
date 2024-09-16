import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  ticketOutline,
} from 'ionicons/icons';
import { EventsService } from '../services/events.service';
import { EventInterface } from 'src/common/shared/@types/event';
import { GetEventDate } from 'src/common/utils/date/getEventDate';
import { NgIf } from '@angular/common';

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
    NgIf
  ],
})
export class EventDetailComponent implements OnInit {
  id: string = '';
  valorIngresso = '0,00';
  numberTickets: number = 0;
  event!: EventInterface;

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly eventService: EventsService
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

  formatDate(startDate: Date, endDate: Date){
   return GetEventDate(String(startDate), String(endDate))
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.eventService
      .getDataById(`event/${this.id}`)
      .subscribe((event: EventInterface) => {
        this.event = event;
        console.log(event);
      });
  }
}
