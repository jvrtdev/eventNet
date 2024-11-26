import { Component, EnvironmentInjector, inject } from '@angular/core';
// import { Router } from '@angular/router';
import { HeaderComponent } from '@core/components/header/header.component';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRefresher,
  IonRefresherContent,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  calendarOutline,
  chatbubblesOutline,
  homeOutline,
  notificationsOutline,
  searchCircleOutline,
  ticketOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  standalone: true,
  imports: [
    IonContent,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    HeaderComponent,
  ],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  component = HeaderComponent;

  constructor() {
    addIcons({
      calendarOutline,
      ticketOutline,
      homeOutline,
      chatbubblesOutline,
      searchCircleOutline,
      notificationsOutline,
    });
  }

}
