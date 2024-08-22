import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tickets',
        loadComponent: () =>
          import('./components/tickets/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'feed',
        loadComponent: () =>
          import('./components/feed/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'events',
        loadComponent: () =>
          import('./components/events/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/events',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/events',
    pathMatch: 'full',
  },
];
