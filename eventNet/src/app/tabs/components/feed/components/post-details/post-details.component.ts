import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { formatPostDate } from '@core/common/utils/date/formatPostDate';
import { getUserId } from '@core/common/utils/getUserId';
import { CommentComponent } from '@core/components/comment/comment.component';
import { CommentInterface } from '@core/shared/@types/comment';
import { PostInterface } from '@core/shared/@types/post';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonText,
  IonTextarea,
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
  sendOutline,
} from 'ionicons/icons';
import { CommentService } from '../../services/comment.service';
import { PostDetailsService } from './post-details.service';

@Component({
  selector: 'post-details-component',
  standalone: true,
  templateUrl: './post-details.component.html',
  imports: [
    IonTextarea,
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
    IonFooter,
    IonButton,
    IonItem,
    FormsModule,
  ],
})
export class PostDetailsComponent implements OnInit {
  constructor(
    private readonly postDetailsService: PostDetailsService,
    private readonly commentService: CommentService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    addIcons({
      chatbubbleOutline,
      repeatSharp,
      heartOutline,
      heart,
      mailOutline,
      sendOutline,
    });
  }
  comment!: CommentInterface;
  text: string = '';
  id: string = '';
  post!: PostInterface;

  formatDate(date: string) {
    return formatPostDate(date);
  }

  createComment() {
    if (this.comment.text) {
      this.commentService
        .postData(`comment`, this.comment)
        .subscribe((response) => {
          console.log(response);
        });
      this.comment.text = '';
    }
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.postDetailsService
      .getDataById(`post/${this.id}`)
      .subscribe((post: PostInterface) => {
        this.post = post;
        this.comment = {
          postId: post.id ?? '',
          userId: getUserId(),
          text: '',
        };
      });
  }
}
