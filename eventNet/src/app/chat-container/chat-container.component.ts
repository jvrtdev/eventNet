import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  imports: [
    IonTitle,
    IonAvatar,
    IonItem,
    IonContent,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonLabel,
    RouterLink
  ],
})
export class ChatContainerComponent implements OnInit {
  username = "User"
  constructor() {}

  ngOnInit() {}
}
