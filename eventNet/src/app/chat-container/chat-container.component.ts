import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventsService } from '@app/tabs/components/events/services/events.service';
import { getUserId } from '@core/common/utils/getUserId';
import { ParticipantInterface } from '@core/shared/@types/participant';
import { UserEventInterface } from '@core/shared/@types/user-event.interface';
import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonText,
  IonToolbar,
} from '@ionic/angular/standalone';
import { FriendshipService } from 'src/core/services/user/friendship.service';

@Component({
  standalone: true,
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  imports: [
    IonText,
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
    NgIf,
  ],
})
export class ChatContainerComponent implements OnInit {
  constructor(
    private readonly friendshipService: FriendshipService,
    private readonly eventService: EventsService
  ) {}
  friends!: ParticipantInterface[];
  events!: UserEventInterface[];
  userId = getUserId();

  ngOnInit() {
    this.friendshipService
      .findAllFriendsByUserId(this.userId)
      .subscribe((friend: ParticipantInterface[]) => {
        this.friends = friend;
        console.log(friend);
      });

    this.eventService.findEventsAttendance(this.userId).subscribe((event) => {
      this.events = event;
    });
  }
}
