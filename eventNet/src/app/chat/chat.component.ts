import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonText,
  IonTextarea,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { sendOutline } from 'ionicons/icons';
import { MessageTypes } from 'src/@types/message';
import { ChatService } from './chat.service';

@Component({
  standalone: true,
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  imports: [
    IonText,
    IonIcon,
    IonButton,
    IonContent,
    IonBackButton,
    IonToolbar,
    IonHeader,
    IonButtons,
    IonInput,
    IonItem,
    NgFor,
    FormsModule,
    IonTextarea,
    IonFooter,
  ],
})
export class ChatComponent implements OnInit {
  message: MessageTypes = { name: '', text: '' };
  messages: MessageTypes[] = [];

  constructor(private chatService: ChatService) {
    addIcons({ sendOutline });
  }

  ngOnInit() {
    this.message.name = 'User' + (Math.random() * 10).toFixed(2);
    this.chatService.receiveMessage().subscribe((message) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message.text = '';
  }
}
