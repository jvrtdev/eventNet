import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ScanQrCodeService } from '@core/services/qrcode-scanner/scanQRCode';
import { EventInterface } from '@core/shared/@types/event';
import { QueryParamsInterface } from '@core/shared/@types/query-params.interface';
import {
  InfiniteScrollCustomEvent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, qrCodeOutline } from 'ionicons/icons';
import { GetEventDate } from 'src/core/common/utils/date/getEventDate';
import { EventsService } from './services/events.service';

@Component({
  standalone: true,
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  providers: [EventsService],
  imports: [
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent,
    IonContent,
    IonFab,
    IonIcon,
    IonFabButton,
    FormsModule,
    NgFor,
    RouterLink,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  ],
})
export class Tab3Page implements OnInit {
  private params: QueryParamsInterface = {
    page: 1,
    limit: 10,
    sort: 'createdAt',
    filter: 'createdAt',
  };

  constructor(
    private eventService: EventsService,
    private qrCodeService: ScanQrCodeService
  ) {
    addIcons({ add, qrCodeOutline });
  }
  events: EventInterface[] = [];

  scanQRCode() {
    this.qrCodeService.scanQRCode();
  }

  formatDate(startDate: Date, endDate: Date): string {
    return GetEventDate(String(startDate), String(endDate));
  }

  getEvents() {
    this.eventService
      .getAllData('event', this.params)
      .subscribe((response: EventInterface[]) => {
        this.events.push(...response);
      });
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
      this.params.page++;
      this.getEvents();
    }, 500);
  }

  ngOnInit() {
    this.getEvents();
  }
}
