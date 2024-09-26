import { Component } from "@angular/core";
import { IonBackButton, IonButtons, IonContent, IonHeader, IonToolbar, IonText } from "@ionic/angular/standalone";

@Component({
  standalone: true,
  templateUrl: './login.component.html',
  imports: [IonText, IonContent, IonHeader, IonToolbar, IonBackButton, IonButtons]
})
export class LoginComponent{}