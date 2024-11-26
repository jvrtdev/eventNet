import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GetEventDate } from '@core/common/utils/date/getEventDate';
import { getUserId } from '@core/common/utils/getUserId';
import { UserEventInterface } from '@core/shared/@types/user-event.interface';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { EventsService } from '../events/services/events.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  standalone: true,
  imports: [
    IonText,
    IonContent,
    NgFor,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    RouterLink,
    IonButton,
  ],
})
export class Tab1Page implements OnInit {
  constructor(private readonly eventService: EventsService) {}
  events!: UserEventInterface[];
  userId = getUserId();

  formatDate(startDate: Date, endDate: Date): string {
    return GetEventDate(String(startDate), String(endDate));
  }

  ngOnInit(): void {
    this.eventService.findEventsAttendance(this.userId).subscribe((event) => {
      this.events = event;
      console.log('userEvent', event);
    });
  }
}
