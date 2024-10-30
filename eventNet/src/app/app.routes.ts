import { Routes } from '@angular/router';
import { UserPreferencesComponent } from 'src/app/user-preferences/user-preferences.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { SignUpComponent } from './auth/components/sign-up/step1/sign-up.component';
import { SignUpStep2Component } from './auth/components/sign-up/step2/step2.component';
import { SignUpStep3Component } from './auth/components/sign-up/step3/step3.component';
import { HomeComponent } from './auth/home.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { ChatComponent } from './chat-container/chat/chat.component';
import { SearchComponent } from './search/search.component';
import { EventDetailComponent } from './tabs/components/events/event-detail/event-detail.component';
import { CreatePostComponent } from './tabs/components/feed/components/create-post/create-post.component';
import { PostDetailsComponent } from './tabs/components/feed/components/post-details/post-details.component';
import { DarkmodePreferencesComponent } from './user-preferences/components/darkmode-preferences/darkmode-preferences.component';
import { EditAccountComponent } from './user-preferences/components/edit-account/edit-account.component';
import { PrivacyPreferencesComponent } from './user-preferences/components/privacy-preferences/privacy-preferences.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
    canActivate: [AuthGuard],
  },
  {
    path: 'event/:id',
    component: EventDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'chat',
    component: ChatContainerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'chat/:conversationId/:receiverId',
    component: ChatComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'preferences',
    component: UserPreferencesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'preferences/account',
    component: EditAccountComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'preferences/theme',
    component: DarkmodePreferencesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'preferences/privacy',
    component: PrivacyPreferencesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'post/:id',
    component: PostDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'post',
    component: CreatePostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile/:id',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'sign-up/address',
    component: SignUpStep2Component,
  },
  {
    path: 'sign-up/profile',
    component: SignUpStep3Component,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
