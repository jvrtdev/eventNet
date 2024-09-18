import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
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
  ticketOutline,
} from 'ionicons/icons';
import { HeaderComponent } from 'src/common/shared/components/header/header.component';

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
    });
  }
}
