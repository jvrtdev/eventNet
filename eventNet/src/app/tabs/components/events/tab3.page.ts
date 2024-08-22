import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import {
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


@Component({
  standalone: true,
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    FormsModule,
    NgIf,
    OfficialEventsComponent,
    CommunityEventsComponent,
  ],
})
export class Tab3Page {
  constructor() {}

  selectedSegment = 'official';
}
