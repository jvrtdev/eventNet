import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  imports: [
    IonButton,
    IonBackButton,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonIcon,
  ],
})
export class EventDetailComponent implements OnInit {
  id: any;

  constructor(private activatedRoute: ActivatedRoute) {
    addIcons({ arrowBackOutline });
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }
}
