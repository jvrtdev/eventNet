import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonFooter } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'official-events',
  templateUrl: './official-events.component.html',
  imports: [IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonCardContent,
    IonContent, IonButton, IonFooter, RouterLink
  ]
})
export class OfficialEventsComponent  implements OnInit {
  

  constructor() { }

  ngOnInit() {}

}
