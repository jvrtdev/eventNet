import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  CapacitorBarcodeScanner,
  CapacitorBarcodeScannerTypeHint,
} from '@capacitor/barcode-scanner';

@Injectable({
  providedIn: 'root',
})
export class ScanQrCodeService {
  constructor(private router: Router) {}

  async scanQRCode() {
    const { ScanResult } = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.QR_CODE,
    });

    if (ScanResult) {
      this.router.navigate([ScanResult]);
    }
  }
}
