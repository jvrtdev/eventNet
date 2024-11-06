import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EventInterface } from '@core/shared/@types/event';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { GetEventDate } from 'src/core/common/utils/date/getEventDate';
import { CommunityEventsComponent } from './components/community-events/community-events.component';
import { OfficialEventsComponent } from './components/official-events/official-events.component';
import { EventsService } from './services/events.service';

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
    IonFab,
    IonIcon,
    IonFabButton,
    FormsModule,
    NgIf,
    NgFor,
    OfficialEventsComponent,
    CommunityEventsComponent,
    RouterLink,
  ],
})
export class Tab3Page implements OnInit {
  constructor(private eventService: EventsService) {
    addIcons({ add });
  }
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
