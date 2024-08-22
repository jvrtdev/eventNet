import { Component, OnInit } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  imports: [IonContent, IonBackButton, IonToolbar, IonHeader, IonButtons],
})
export class ChatComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
