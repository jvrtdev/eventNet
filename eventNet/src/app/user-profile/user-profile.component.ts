import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '@app/tabs/components/feed/services/post.service';
import { getUser } from '@core/common/utils/getUser';
import { getUserId } from '@core/common/utils/getUserId';
import { UserService } from '@core/services/user/user.service';
import { PostInterface } from '@core/shared/@types/post';
import { UserInterface } from '@core/shared/@types/user';
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  logoGithub,
  logoInstagram,
  logoLinkedin,
  settings,
} from 'ionicons/icons';

@Component({
  standalone: true,
  templateUrl: './user-profile.component.html',
  imports: [
    IonButtons,
    IonTitle,
    IonButton,
    IonContent,
    IonText,
    IonAvatar,
    IonIcon,
    NgIf,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonToolbar,
    IonBackButton,
    IonHeader,
  ],
})
export class UserProfileComponent implements OnInit {
  id!: string;
  userProfile!: UserInterface;
  userPosts!: PostInterface[];
  constructor(
    private userService: UserService,
    private postService: PostService,
    private router: ActivatedRoute
  ) {
    addIcons({ logoGithub, logoLinkedin, logoInstagram, settings });
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')!;
    this.userService.getDataById(`user/${this.id}`).subscribe((user) => {
      this.userProfile = user;
    });
  }
}
