import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getUserId } from '@core/common/utils/getUserId';
import { PostInterface } from '@core/shared/@types/post';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonLabel,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  add,
  chatbubbleOutline,
  heart,
  heartOutline,
  mailOutline,
  repeat,
  repeatSharp,
} from 'ionicons/icons';
import { FeedService } from './services/feed.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  standalone: true,
  imports: [
    IonFab,
    IonButtons,
    IonButton,
    IonText,
    IonAvatar,
    IonHeader,
    IonFabButton,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    NgFor,
    NgIf,
    RouterLink,
    IonLabel,
    IonSearchbar,
  ],
})
export class Tab2Page implements OnInit {
  feed!: PostInterface[];
  private userId = getUserId();

  constructor(private readonly feedService: FeedService) {
    addIcons({
      chatbubbleOutline,
      repeatSharp,
      heartOutline,
      heart,
      mailOutline,
      add,
    });
  }

  createLike(postId: string) {
    this.feedService
      .likePost('like', {
        postId: postId,
        userId: this.userId,
      })
      .subscribe((like) => {
        console.log(like);
      });
  }
  removeLike(likeId: string) {
    this.feedService.unlikePost(`like/${likeId}`).subscribe((like) => {
      console.log(like);
    });
  }

  ngOnInit(): void {
    this.feedService
      .getFeedByUserId('feed/' + this.userId)
      .subscribe((feed: PostInterface[]) => {
        this.feed = feed;
        console.log(feed);
      });
  }
}
