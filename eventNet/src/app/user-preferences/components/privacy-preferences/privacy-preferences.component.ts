import { Component, OnInit } from '@angular/core';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-privacy-preferences',
  templateUrl: './privacy-preferences.component.html',
  imports: [IonHeader, IonToolbar, IonBackButton, IonButtons, IonContent]
})
export class PrivacyPreferencesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
