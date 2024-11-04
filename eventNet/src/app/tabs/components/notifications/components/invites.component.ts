import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConversationInterface } from '@core/shared/@types/conversation';
import { ToastComponent } from '@core/shared/components/toast.component';
import {
  IonAvatar,
  IonIcon,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';
import { NotificationsService } from '../notifications.service';

@Component({
  standalone: true,
  selector: 'invites-component',
  imports: [RouterLink, NgIf, NgFor, IonItem, IonLabel, IonIcon, IonAvatar],
  template: `
    <div *ngIf="invites">
      <div
        class="flex items-center justify-between w-full border-y border-slate-300"
        *ngFor="let invite of invites"
      >
        <div class="flex items-center gap-1 w-full">
          <ion-avatar slot="start">
            <img
              alt="Profile person avatar"
              class="w-12 h-12 min-h-fit min-w-fit rounded-full border "
              src="{{ invite.recipient?.profile?.avatar }}"
            />
          </ion-avatar>
          <ion-label class="">
            {{ invite.recipient?.name }}
          </ion-label>
        </div>
        <div class="flex items-center gap-2 text-3xl">
          <ion-icon
            name="checkmark-circle-outline"
            color="success"
            (click)="acceptInvite(invite)"
          ></ion-icon>
          <ion-icon
            name="close-circle-outline"
            color="danger"
            (click)="refuseInvite(invite)"
          ></ion-icon>
        </div>
      </div>
    </div>
  `,
})
export class InvitesComponent {
  @Input() invites!: ConversationInterface[];

  constructor(
    private readonly notificationsService: NotificationsService,
    private toast: ToastComponent
  ) {
    addIcons({ checkmarkCircleOutline, closeCircleOutline });
  }

  acceptInvite(invite: ConversationInterface) {
    this.notificationsService.acceptPendingInvite(invite.id).subscribe({
      next: (response) => {
        this.toast.setToast({
          label: 'Convite aceito com sucesso!',
          icon: 'checkbox',
          color: 'success',
        });
        console.log(response);
      },

      error: (error) => {
        this.toast.setToast({
          label: error.message,
          icon: 'close-circle',
          color: 'danger',
        });
        console.log(error);
      },
    });
  }
  refuseInvite(invite: ConversationInterface) {
    this.notificationsService.refusedPendingInvite(invite.id).subscribe({
      next: (response) => {
        this.toast.setToast({
          label: 'Convite rejeitado com sucesso!',
          icon: 'checkbox',
          color: 'success',
        });
        console.log(response);
      },

      error: (error) => {
        this.toast.setToast({
          label: error.message,
          icon: 'close-circle',
          color: 'danger',
        });
        console.log(error);
      },
    });
  }
}
