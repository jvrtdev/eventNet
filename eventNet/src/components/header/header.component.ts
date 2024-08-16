import { Component } from '@angular/core';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chatbubblesOutline, closeOutline, personCircleOutline } from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    IonTitle,
    IonIcon,
    IonToolbar,
    IonHeader,
    IonAvatar,
    IonButtons,
    IonButton,
    IonMenuToggle,
    IonMenu,
    IonContent,
    IonMenuButton
  ],
})
export class HeaderComponent {
  constructor() {
    addIcons({ chatbubblesOutline, personCircleOutline, closeOutline });
  }

  avatarUrl = 'https://ionicframework.com/docs/img/demos/avatar.svg';
}
