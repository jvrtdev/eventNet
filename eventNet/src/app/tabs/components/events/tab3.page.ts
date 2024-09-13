import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { OfficialEventsComponent } from './components/official-events/official-events.component';
import { CommunityEventsComponent } from './components/community-events/community-events.component';
import { EventsService } from './services/events.service';
import { RouterLink } from '@angular/router';
import { EventInterface } from 'src/common/shared/@types/event';
import { GetEventDate } from 'src/common/utils/date/getEventDate';

@Component({
  standalone: true,
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  providers: [EventsService],
  imports: [
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    FormsModule,
    NgIf,
    NgFor,
    OfficialEventsComponent,
    CommunityEventsComponent,
    RouterLink,
  ],
})
export class Tab3Page implements OnInit {
  constructor(private eventService: EventsService) {}
  events: EventInterface[] = [];

  formatDate(startDate: Date, endDate: Date): string {
    return GetEventDate(String(startDate), String(endDate));
  }

  ngOnInit() {
    this.eventService
      .getAllData('event')
      .subscribe((response: EventInterface[]) => {
        this.events = response;
      });
  }
}
