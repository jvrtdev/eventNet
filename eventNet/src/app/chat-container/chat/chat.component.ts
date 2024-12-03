import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { getUser } from '@core/common/utils/getUser';
import { ConversationInterface } from '@core/shared/@types/conversation';
import { EventInterface } from '@core/shared/@types/event';
import { MessageInterface } from '@core/shared/@types/message';
import { ParticipantInterface } from '@core/shared/@types/participant';
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
  conversation!: ConversationInterface;
  message: MessageInterface = {
    content: '',
    senderId: '',
    conversationId: '',
    senderName: '',
  };
  messages: MessageInterface[] = [];
  sender!: { sub: string; name: string; userName: string };
  receiver!: UserInterface;

  @ViewChild(IonContent, { static: false }) content!: IonContent;

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom(300);
    }, 100); // Delay curto para garantir que a mensagem seja renderizada
  }
  scrollToBottomOnInit() {
    setTimeout(() => {
      this.content.scrollToBottom(300); // 300ms para a rolagem suave
    }, 500); // Ajuste o tempo se necessário para garantir que as mensagens sejam carregadas
  }

  ionViewDidEnter() {
    this.scrollToBottom(); // Rola o scroll para o final ao abrir o chat
  }

  navigateTo() {
    if (!this.conversation.isGroup) {
      this.router.navigate(['user', this.receiver.id]);
    }
    this.router.navigate(['event', this.conversation?.event?.id ?? '']);
  }

  constructor(
    private chatGateway: ChatGateway,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private chatService: ChatService
  ) {
    addIcons({ sendOutline });
  }

  ngOnInit() {
    this.sender = getUser();

    this.activatedRoute.params.subscribe((params) => {
      this.conversationId = params['conversationId'];
      //  this.receiverId = params['receiverId'];
    });

    this.chatService
      .getDataById(`conversation/${this.conversationId}`)
      .subscribe((chat: ConversationInterface) => {
        console.log(chat);
        this.conversation = chat;
        if (!this.conversation.isGroup) {
          this.receiver.id =
            chat.participant?.find(
              (receiver: ParticipantInterface) =>
                receiver.userId !== this.sender.sub
            )?.userId ?? '';

          this.chatService
            .getReceiverByConversationId(`user/${this.receiver.id}`)
            .subscribe((user) => {
              this.receiver = user;
              console.log('Receiver => ', user);
            });
        }
      });

    // if (!this.conversation.isGroup) {
    //   this.chatService
    //     .getReceiverByConversationId(`user/${this.receiver.id}`)
    //     .subscribe((user) => {
    //       this.receiver = user;
    //       console.log('Receiver => ', user);
    //     });
    // }

    this.chatService
      .getMessagesByConversationId(`message/${this.conversationId}`)
      .subscribe((messages) => {
        this.messages = messages;
      });

    this.message = {
      content: '',
      conversationId: this.conversationId,
      senderId: this.sender.sub,
      senderName: this.sender.name,
    };

    this.chatGateway.receiveMessage().subscribe((message) => {
      this.messages.push(message);
    });
    this.scrollToBottomOnInit();
  }

  sendMessage() {
    console.log('func call');
    this.chatGateway.sendMessage(this.message);
    this.message.content = '';
    this.scrollToBottom();
  }
}
