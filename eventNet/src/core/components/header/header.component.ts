import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getUser } from '@core/common/utils/getUser';
import { AuthService } from '@core/services/auth.service';
import { ToastComponent } from '@core/shared/components/toast.component';
import { menuHeader } from '@core/shared/data/menu-header';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonNavLink,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chatbubblesOutline,
  closeOutline,
  exitOutline,
  personCircleOutline,
  settingsOutline,
} from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    IonSearchbar,
    IonText,
    IonLabel,
    IonItem,
    IonList,
    IonTitle,
    IonIcon,
    IonToolbar,
    IonHeader,
    IonAvatar,
    IonButtons,
    IonButton,
    IonMenuToggle,
    IonMenu,
    IonContent,
    IonMenuButton,
    IonNavLink,
    RouterLink,
    NgFor,
  ],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private toast: ToastComponent) {
    addIcons({
      chatbubblesOutline,
      personCircleOutline,
      closeOutline,
      settingsOutline,
      exitOutline,
    });

    this.user = getUser();
  }
  user: any;

  handleLogout() {
    this.toast.setToast({
      label: 'Usuario desconectado',
      color: 'secondary',
      icon: 'information-circle',
    });
    this.authService.logout();
  }

  items = menuHeader;

  avatarUrl = 'https://ionicframework.com/docs/img/demos/avatar.svg';
}
