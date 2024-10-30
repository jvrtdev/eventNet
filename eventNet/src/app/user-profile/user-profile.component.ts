import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '@app/tabs/components/feed/services/post.service';
import { getUser } from '@core/common/utils/getUser';
import { getUserId } from '@core/common/utils/getUserId';
import { FriendshipService } from '@core/services/user/friendship.service';
import { UserService } from '@core/services/user/user.service';
import { ParticipantInterface } from '@core/shared/@types/participant';
import { PostInterface } from '@core/shared/@types/post';
import { UserInterface } from '@core/shared/@types/user';
import { ToastComponent } from '@core/shared/components/toast.component';
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
  paperPlane,
  personAddOutline,
  settings,
  settingsOutline,
} from 'ionicons/icons';
import { PostComponent } from '../../core/shared/components/post.component';

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
    RouterLink,
    PostComponent,
  ],
})
export class UserProfileComponent implements OnInit {
  userId!: string;
  profileUserId!: string;
  isUserProfileOwner!: boolean;
  isFriend!: ParticipantInterface | undefined;
  userProfile!: UserInterface;
  userPosts!: PostInterface[];
  constructor(
    private userService: UserService,
    private postService: PostService,
    private friendshipService: FriendshipService,
    private router: ActivatedRoute,
    private toast: ToastComponent
  ) {
    addIcons({
      logoGithub,
      logoLinkedin,
      logoInstagram,
      personAddOutline,
      paperPlane,
      settingsOutline,
    });

    this.userId = getUserId();
  }
  addFriend() {
    this.friendshipService
      .inviteNetwork({ senderId: this.userId, recipientId: this.profileUserId })
      .subscribe(() => {
        this.toast.setToast({
          label: 'Solicitação enviada',
          icon: 'checkbox',
          color: 'success',
        });
        console.log(this.isFriend);
      });
  }

  ngOnInit(): void {
    this.profileUserId = this.router.snapshot.paramMap.get('id')!;
    this.isUserProfileOwner = this.profileUserId === this.userId;
    this.userService
      .getDataById(`user/${this.profileUserId}`)
      .subscribe((user) => {
        this.userProfile = user;
        this.postService
          .findAllPostByUserId(this.profileUserId)
          .subscribe((posts) => {
            this.userPosts = posts;
          });
      });

    this.friendshipService
      .findAllFriendsByUserId(getUserId())
      .subscribe((friends) => {
        this.isFriend = friends.find(
          (friend) => friend.userId === this.profileUserId
        );
      });
  }
}
