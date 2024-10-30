import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConversationInterface } from '@core/shared/@types/conversation';
import {
  IonAvatar,
  IonIcon,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'invites-component',
  imports: [RouterLink, NgIf, NgFor, IonItem, IonLabel, IonIcon, IonAvatar],
  template: `
    <div *ngIf="invites">
      <div
        class="flex items-center justify-between w-full"
        *ngFor="let invite of invites"
      >
        <div class="flex gap-1 w-full">
          <ion-avatar slot="start">
            <img
              alt="Profile person avatar"
              class="w-12 h-12 min-h-fit min-w-fit rounded-full "
            />
          </ion-avatar>
          <ion-label class="">
            {{ invite.isGroup }}
          </ion-label>
        </div>
        <div class="flex items-center gap-2 text-3xl">
          <ion-icon name="checkmark-circle-outline" color="success"></ion-icon>
          <ion-icon name="close-circle-outline" color="danger"></ion-icon>
        </div>
      </div>
    </div>
  `,
})
export class InvitesComponent {
  @Input() invites!: ConversationInterface[];

  constructor() {
    addIcons({ checkmarkCircleOutline, closeCircleOutline });
    // this.invites.filter((invite) => invite.participant[1]);
    // console.log(this.invites);
  }
}
