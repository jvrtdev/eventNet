import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getUserId } from '@core/common/utils/getUserId';
import { AuthService } from '@core/services/auth.service';
import { UserService } from '@core/services/user/user.service';
import { UserInterface } from '@core/shared/@types/user';
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
    IonLabel,
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
    RouterLink,
    NgFor,
    NgIf,
  ],
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toast: ToastComponent,
    private userService: UserService
  ) {
    addIcons({
      chatbubblesOutline,
      personCircleOutline,
      closeOutline,
      settingsOutline,
      exitOutline,
    });
  }
  user!: UserInterface;

  handleLogout() {
    this.toast.setToast({
      label: 'Usuario desconectado',
      color: 'secondary',
      icon: 'information-circle',
    });
    this.authService.logout();
  }

  ngOnInit(): void {
    this.userService.getDataById(`user/${getUserId()}`).subscribe((user) => {
      this.user = user;
      console.log('user do header', user);
    });
  }
  items = menuHeader;
}
