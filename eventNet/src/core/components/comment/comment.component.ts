import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chatbubbleOutline,
  heart,
  heartOutline,
  mailOutline,
  repeatSharp,
} from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'comment-component',
  templateUrl: './comment.component.html',
  imports: [IonContent, IonText, NgFor, NgIf, RouterLink, IonIcon],
})
export class CommentComponent implements OnInit {
  constructor() {
    addIcons({
      heart,
      heartOutline,
      repeatSharp,
      chatbubbleOutline,
      mailOutline,
    });
    console.log(this.comments);
  }

  @Input() comments: any;

  ngOnInit(): void {}
}
