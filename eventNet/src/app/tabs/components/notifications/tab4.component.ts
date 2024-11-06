import { Component, OnInit } from '@angular/core';
import { getUserId } from '@core/common/utils/getUserId';
import { ConversationInterface } from '@core/shared/@types/conversation';
import { IonContent, IonText } from '@ionic/angular/standalone';
import { InvitesComponent } from './components/invites.component';
import { NotificationsService } from './notifications.service';

@Component({
  standalone: true,
  selector: 'tab4-component',
  templateUrl: './tab4.component.html',
  imports: [IonText, IonContent, InvitesComponent],
})
export class Tab4Component implements OnInit {
  userId!: string;
  invites!: any; //ConversationInterface[];
  constructor(private notificationsService: NotificationsService) {
    this.userId = getUserId();
  }
  ngOnInit(): void {
    this.notificationsService
      .findAllPendingInvitesByUserId(this.userId)
      .subscribe((invites) => {
        this.invites = invites;
        console.log('olha os invites aí ó', invites);
      });
  }
}
