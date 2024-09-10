import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { lockClosed, moon, personCircle } from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'user-preferences',
  templateUrl: './user-preferences.component.html',
  imports: [
    IonList,
    IonLabel,
    IonIcon,
    IonItem,
    IonContent,
    IonToolbar,
    IonHeader,
    IonButtons,
    IonButton,
    IonBackButton,
    RouterLink
  ],
})
export class UserPreferencesComponent implements OnInit {
  constructor() {
    addIcons({ personCircle, moon, lockClosed });
  }

  ngOnInit() {}
}
