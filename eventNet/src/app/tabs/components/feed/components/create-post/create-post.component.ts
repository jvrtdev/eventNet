import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { getUser } from '@core/common/utils/getUser';
import { PostInterface } from '@core/shared/@types/post';
import { ToastComponent } from '@core/shared/components/toast.component';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { PostService } from '../../services/post.service';

@Component({
  standalone: true,
  selector: 'create-post-component',
  templateUrl: './create-post.component.html',
  imports: [
    IonButton,
    IonItem,
    IonTextarea,
    IonHeader,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonToolbar,
    IonContent,
    IonText,
    IonIcon,
    ReactiveFormsModule,
  ],
})
export class CreatePostComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router,
    private toast: ToastComponent
  ) {}

  post!: FormGroup;
  user: any;

  ngOnInit(): void {
    this.user = getUser();

    this.post = this.fb.group({
      ownerId: [this.user.sub],
      text: ['', [Validators.required]],
    });
  }

  createPost() {
    if (this.post.valid) {
      this.postService.postData('post', this.post.value).subscribe({
        next: (response: PostInterface) => {
          console.log(response);
          this.router.navigate(['/post/', response.id]);
        },
        error: (error) => {
          console.log(error);
          this.toast.setToast({
            label: error.message,
            icon: 'close-circle',
            color: 'danger',
          });
        },
      });
    }
  }
}
