import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addCircle,
  arrowBackOutline,
  calendarOutline,
  cartOutline,
  locationOutline,
  removeCircle,
  ticket,
  ticketOutline,
} from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  imports: [
    IonLabel,
    IonItem,
    IonList,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonCard,
    IonText,
    IonButton,
    IonBackButton,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonIcon,
    IonCardSubtitle,
  ],
})
export class EventDetailComponent implements OnInit {
  id: any;
  valorIngresso = '0,00';
  numberTickets: number = 0;

  constructor(private activatedRoute: ActivatedRoute) {
    addIcons({
      calendarOutline,
      locationOutline,
      cartOutline,
      ticket,
      removeCircle,
      addCircle,
    });
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
