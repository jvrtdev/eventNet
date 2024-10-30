import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chatbubbleOutline,
  heartOutline,
  mailOutline,
  repeatSharp,
} from 'ionicons/icons';
import { PostInterface } from '../@types/post';

@Component({
  standalone: true,
  selector: 'post-component',
  imports: [NgFor, NgIf, RouterLink, IonIcon, IonText],
  template: `<div
    class="border-slate-500 border-y border-opacity-20"
    *ngFor="let post of data"
  >
    <!-- <span class="text-slate-400 flex items-center ml-11 space-x-1">
    <ion-icon name="heart" color=""></ion-icon>
    <ion-text>João curtiu</ion-text>
  </span> -->
    <div class="flex flex-nowrap gap-2 w-full p-2">
      <img
        alt="Silhouette of a person's head"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        class="w-12 h-12 min-h-fit min-w-fit rounded-full"
        id="profile"
      />
      <div class="flex flex-col w-full h-full">
        <div class="flex items-center space-x-1">
          <label for="profile" [routerLink]="['/profile/', post.ownerId]">
            <ion-text class="text-lg">{{ post.owner?.name }}</ion-text>
            <ion-text class="text-slate-400"
              >&#64;{{ post.owner?.userName }}</ion-text
            >
            <ion-text class="text-slate-400">·3h</ion-text>
          </label>
        </div>
        <p class="text-start font-light" [routerLink]="['/post/', post.id]">
          {{ post.text }}
        </p>
        <footer class="flex items-center justify-between text-base my-1 pr-20">
          <div class="flex items-center gap-1">
            <ion-icon name="chatbubble-outline"></ion-icon>
            <span>{{ post._count.comments }}</span>
          </div>

          <div class="flex items-center gap-1">
            <ion-icon name="repeat-sharp"></ion-icon>
            <span>{{ post._count.reposts }}</span>
          </div>

          <div class="flex items-center gap-1">
            <ion-icon name="heart-outline"></ion-icon>
            <span>{{ post._count.likes }}</span>
          </div>

          <div class="flex items-center gap-1">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
        </footer>
      </div>
    </div>
  </div>`,
})
export class PostComponent {
  @Input() data!: PostInterface[];

  constructor() {
    addIcons({ mailOutline, heartOutline, chatbubbleOutline, repeatSharp });
  }
}
