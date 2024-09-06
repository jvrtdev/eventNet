import { Routes } from '@angular/router';
import { EventDetailComponent } from './tabs/components/events/event-detail/event-detail.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { ChatComponent } from './chat-container/chat/chat.component';

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
  }
];
