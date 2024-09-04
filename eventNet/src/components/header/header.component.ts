import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  IonNavLink,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chatbubblesOutline, closeOutline, personCircleOutline } from 'ionicons/icons';
import { ChatComponent } from 'src/app/chat/chat.component';

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
    IonMenuButton,
    IonNavLink,
    RouterLink
  ],
})
export class HeaderComponent {
  constructor() {
    addIcons({ chatbubblesOutline, personCircleOutline, closeOutline });
  }

  avatarUrl = 'https://ionicframework.com/docs/img/demos/avatar.svg';

}
