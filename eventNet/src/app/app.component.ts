import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { IonApp, IonRouterOutlet, Platform } from '@ionic/angular/standalone';
import { ToastComponent } from '../core/shared/components/toast.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, ToastComponent],
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform, private router: Router) {}
  ngOnInit(): void {
    this.platform.ready().then(() => {
      if (Capacitor.isNativePlatform()) {
        App.addListener('appUrlOpen', (event: any) => {
          const url = event.url;
          const path = url.split('://')[1];
          this.router.navigate([`/${path}`]);
        });
      }
    });
  }
}
