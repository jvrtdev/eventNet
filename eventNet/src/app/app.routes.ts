import { Routes } from '@angular/router';
import { EventDetailComponent } from './tabs/components/events/event-detail/event-detail.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { ChatComponent } from './chat-container/chat/chat.component';
import { UserPreferencesComponent } from 'src/app/user-preferences/user-preferences.component';
import { EditAccountComponent } from './user-preferences/components/edit-account/edit-account.component';
import { DarkmodePreferencesComponent } from './user-preferences/components/darkmode-preferences/darkmode-preferences.component';
import { PrivacyPreferencesComponent } from './user-preferences/components/privacy-preferences/privacy-preferences.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'event/:id',
    component: EventDetailComponent,
  },
  {
    path: 'chat',
    component: ChatContainerComponent,
  },
  {
    path: 'chat/:id',
    component: ChatComponent
  },
  {
    path: 'preferences',
    component: UserPreferencesComponent,
  },
  {
    path: 'preferences/account',
    component: EditAccountComponent
  },
  {
    path: 'preferences/theme',
    component: DarkmodePreferencesComponent
  },
  {
    path: 'preferences/privacy',
    component: PrivacyPreferencesComponent
  }
];
