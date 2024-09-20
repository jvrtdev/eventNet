import { NgFor, NgIf } from '@angular/common';
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
import { FriendshipInterface } from '@core/shared/@types/friendship';
import { FriendshipService } from 'src/core/services/user/friendship.service';

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
    RouterLink,
    NgFor,
    NgIf
  ],
})
export class ChatContainerComponent implements OnInit {
  constructor(private readonly friendshipService: FriendshipService) {}
  userId: string = 'b03c28ab-4d65-4813-a52d-4323efc4a2d0';
  friends!: FriendshipInterface[];

  ngOnInit() {
    this.friendshipService
      .findAllFriendsByUserId(`friendship/${this.userId}`)
      .subscribe((friend: FriendshipInterface[]) => {
        this.friends = friend;
        console.log(friend)
      });
  }
}
