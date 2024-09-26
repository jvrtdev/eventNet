import { NgIf } from '@angular/common';
import { Component, Injectable, Input } from '@angular/core';
import { IonToast, ToastController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkbox, closeCircle, informationCircle } from 'ionicons/icons';

interface ToastInterface {
  label: string;
  icon: string;
  color: string;
  isNotification?: boolean
  handle?: () => void;
}
@Injectable({
  providedIn: 'root',
})
@Component({
  standalone: true,
  selector: 'toast-component',
  template: `<ion-toast *ngIf="toast"></ion-toast>`,
  imports: [IonToast, NgIf],
})
export class ToastComponent {
  constructor(private toastController: ToastController) {
    addIcons({ closeCircle, checkbox, informationCircle });
  }
  toast!: ToastInterface;

  public setToast(data: ToastInterface) {
    this.presentToast(data);
  }

  private async presentToast(data: ToastInterface) {
    const toast = await this.toastController.create({
      message: data.label,
      duration: 3000,
      position: 'top',
      color: data.color,
      icon: data.icon,
      swipeGesture: "vertical",
      translucent: true
    });

    await toast.present();
  }
}
