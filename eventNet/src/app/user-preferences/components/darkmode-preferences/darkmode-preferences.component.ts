import { Component, OnInit } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonToggle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-darkmode-preferences',
  templateUrl: './darkmode-preferences.component.html',
  imports: [
    IonItem,
    IonToggle,
    IonList,
    IonContent,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonButtons,
    
  ],
})
export class DarkmodePreferencesComponent implements OnInit {
  paletteToggle = false;

  constructor() {}

  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark palette based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkPalette(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) =>
      this.initializeDarkPalette(mediaQuery.matches)
    );
  }

  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange(ev: { detail: { checked: any } }) {
    this.toggleDarkPalette(ev.detail.checked);
  }

  // Add or remove the "ion-palette-dark" class on the html element
  toggleDarkPalette(shouldAdd: boolean | undefined) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }
}
