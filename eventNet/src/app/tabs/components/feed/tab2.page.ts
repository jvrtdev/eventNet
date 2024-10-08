import { Component, OnInit } from '@angular/core';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chatbubbleOutline, heart, heartOutline, mailOutline, repeat, repeatSharp } from 'ionicons/icons';
import { FeedService } from './services/feed.service';
import { PostInterface } from '@core/shared/@types/post';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { getUserId } from '@core/common/utils/getUserId';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  standalone: true,
  imports: [
    IonButtons,
    IonButton,
    IonText,
    IonAvatar,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    NgFor,
    NgIf,
    RouterLink
  ],
})
export class Tab2Page implements OnInit {
  feed!: PostInterface[]
  private userId = getUserId()

  constructor(private readonly feedService: FeedService) {
    addIcons({ chatbubbleOutline, repeatSharp, heartOutline, heart, mailOutline });
  }

  ngOnInit(): void {
    //getFeedByUserId
    this.feedService.getFeedByUserId("feed/"+ this.userId).subscribe((feed: PostInterface[]) => {
      this.feed = feed
      console.log(feed)
    })
  }

  
}
