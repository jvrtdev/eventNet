import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chatbubbleOutline,
  heart,
  heartOutline,
  mailOutline,
  repeatSharp,
} from 'ionicons/icons';
import { PostInterface } from '@core/shared/@types/post';
import { formatPostDate } from '@core/common/utils/date/formatPostDate';
import { CommentComponent } from '@core/components/comment/comment.component';
import { PostDetailsService } from './post-details.service';

@Component({
  selector: 'post-details-component',
  standalone: true,
  templateUrl: './post-details.component.html',
  imports: [
    IonText,
    IonTitle,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonContent,
    NgIf,
    IonIcon,
    CommentComponent,
  ],
})
export class PostDetailsComponent implements OnInit {
  constructor(
    private readonly postDetailsService: PostDetailsService,
    private activatedRoute: ActivatedRoute
  ) {
    addIcons({
      chatbubbleOutline,
      repeatSharp,
      heartOutline,
      heart,
      mailOutline,
    });
  }
  id!: string;
  post!: PostInterface;

  formatDate(date: string) {
    return formatPostDate(date);
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.postDetailsService
      .getDataById(`post/${this.id}`)
      .subscribe((post: PostInterface) => {
        this.post = post;
      });
  }
}
