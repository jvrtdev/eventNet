import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from 'firebase/storage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private storage: any;

  constructor() {
    const app = initializeApp(environment);
    this.storage = getStorage(app);
  }

  async uploadImage(imageDataUrl: string, fileName: string): Promise<string> {
    const storageRef = ref(this.storage, `profile_images/${fileName}`);

    await uploadString(storageRef, imageDataUrl, 'data_url');

    return await getDownloadURL(storageRef);
  }
}
