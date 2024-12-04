import { Component, OnInit } from '@angular/core';
import { getUserId } from '@core/common/utils/getUserId';
import { ConversationInterface } from '@core/shared/@types/conversation';
import { Platform } from '@ionic/angular';
import { IonContent, IonText } from '@ionic/angular/standalone';
import { InvitesComponent } from './components/invites.component';
import { NotificationsGateway } from './notifications.gateway';
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
  constructor(
    private notificationsService: NotificationsService,
    private readonly notificationsGateway: NotificationsGateway,
    private platform: Platform
  ) {
    this.userId = getUserId();
  }

  reloadPage() {
    if (this.platform.is('capacitor')) {
      // Para aplicativos rodando com Capacitor
      location.reload();
    } else {
      // Para aplicativos rodando em navegadores (PWA)
      window.location.reload();
    }
  }

  ngOnInit(): void {
    this.notificationsService
      .findAllPendingInvitesByUserId(this.userId)
      .subscribe((invites) => {
        this.invites = invites;
        console.log('olha os invites aí ó', invites);
      });

    this.notificationsGateway.receiveInvite().subscribe((invite) => {
      this.reloadPage();
    });
  }
}
