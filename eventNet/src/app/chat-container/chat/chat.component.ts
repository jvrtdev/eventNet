import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { getUser } from '@core/common/utils/getUser';
import { MessageInterface } from '@core/shared/@types/message';
import { UserInterface } from '@core/shared/@types/user';
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
  IonTextarea,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { sendOutline } from 'ionicons/icons';
import { ChatGateway } from './chat.gateway';
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
    NgIf,
    NgClass,
    FormsModule,
    IonTextarea,
    IonFooter,
    IonLabel,
    IonAvatar,
  ],
})
export class ChatComponent implements OnInit {
  conversationId!: string;
  receiverId!: string;
  message!: MessageInterface;
  messages: MessageInterface[] = [];
  sender!: { sub: string; name: string; userName: string };
  receiver!: UserInterface;

  constructor(
    private chatGateway: ChatGateway,
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {
    addIcons({ sendOutline });
  }

  ngOnInit() {
    this.sender = getUser();
    console.log('Sender => ', this.sender);

    this.route.params.subscribe((params) => {
      this.conversationId = params['conversationId'];
      this.receiverId = params['receiverId'];
    });

    this.chatService
      .getReceiverByConversationId(`user/${this.receiverId}`)
      .subscribe((user) => {
        this.receiver = user;
        console.log('Receiver => ', user);
      });

    this.chatService
      .getMessagesByConversationId(`message/${this.conversationId}`)
      .subscribe((messages) => {
        this.messages = messages;
      });

    this.message = {
      content: '',
      conversationId: this.conversationId,
      senderId: this.sender.sub,
    };

    this.chatGateway.receiveMessage().subscribe((message) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.chatGateway.sendMessage(this.message);
    this.message.content = '';
  }
}
