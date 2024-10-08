import { Component, OnInit } from "@angular/core";
import { IonContent, IonText, IonAvatar } from "@ionic/angular/standalone";




@Component({
  standalone: true,
  templateUrl: "./user-profile.component.html",
  imports: [
    IonContent,
    IonText,
    IonAvatar,
  ]
})
export class UserProfileComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {
      
  }
}