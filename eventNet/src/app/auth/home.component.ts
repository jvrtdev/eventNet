import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonText,
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  templateUrl: './home.component.html',
  imports: [IonHeader, IonButton, IonContent, IonText, RouterLink],
})
export class HomeComponent {
  logo = '../../assets/icon/icon.png';
}
