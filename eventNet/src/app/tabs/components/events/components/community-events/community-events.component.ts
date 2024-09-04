import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'community-events',
  templateUrl: './community-events.component.html',
  imports: [
    IonContent,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
  ]
})
export class CommunityEventsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
