import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonNavLink,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chatbubblesOutline,
  closeOutline,
  exitOutline,
  personCircleOutline,
  settingsOutline,
} from 'ionicons/icons';
import { menuHeader } from 'src/common/shared/data/menu-header';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    IonText,
    IonLabel,
    IonItem,
    IonList,
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
    RouterLink,
    NgFor,
  ],
})
export class HeaderComponent {
  constructor() {
    addIcons({
      chatbubblesOutline,
      personCircleOutline,
      closeOutline,
      settingsOutline,
      exitOutline,
    });
  }

  items = menuHeader;

  avatarUrl = 'https://ionicframework.com/docs/img/demos/avatar.svg';
}
