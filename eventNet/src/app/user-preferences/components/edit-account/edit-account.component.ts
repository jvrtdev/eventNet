import { Component, OnInit } from '@angular/core';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  imports: [IonContent, IonHeader, IonButtons, IonToolbar, IonBackButton],
})
export class EditAccountComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
