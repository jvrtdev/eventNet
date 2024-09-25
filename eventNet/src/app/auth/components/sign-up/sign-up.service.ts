import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '@core/shared/@types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  private formData!: UserInterface;

  setStep1Data(stepData: any) {
    this.formData = { ...this.formData, ...stepData };
    console.log(this.formData);
  }
  setStep2Data(stepData: any) {
    this.formData = { ...this.formData, address: { ...stepData } };
    console.log(this.formData);
  }
  setStep3Data(stepData: any) {
    this.formData = { ...this.formData, profile: { ...stepData } };
    console.log(this.formData);
  }

  getFormData() {
    return this.formData;
  }

  sendFormData() {
    return this.http
      .post<UserInterface>('http://localhost:3000/user', this.formData)
      .subscribe((user: UserInterface) => {
        localStorage.setItem('token', user.token!);
      });
  }
}
