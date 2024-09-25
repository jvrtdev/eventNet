import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from '@core/services/address.service';
import { CityInterface } from '@core/shared/@types/api/city';
import { NeighborhoodInterface } from '@core/shared/@types/api/neighborhood';
import { StateInterface } from '@core/shared/@types/api/state';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonText,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForwardOutline } from 'ionicons/icons';
import { SignUpService } from '../sign-up.service';

@Component({
  standalone: true,
  templateUrl: './step2.component.html',
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonText,
    NgIf,
    NgFor,
    IonIcon,
    IonButton,
    IonInput,
    IonItem,
    ReactiveFormsModule,
    IonSelectOption,
    IonSelect,
  ],
})
export class SignUpStep2Component implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signUpService: SignUpService,
    private addressService: AddressService
  ) {
    addIcons({ arrowForwardOutline });
  }
  step2Form!: FormGroup;
  states: StateInterface[] = [];
  citiesByState: CityInterface[] = [];
  neighborhoodByCity: NeighborhoodInterface[] = [];

  selectedStateId!: number;
  selectedCityId!: number;

  /*onAddState() {
    if (this.selectedStateId) {
      this.addressService
        .fetchCitiesByStateId(this.selectedStateId)
        .subscribe((cities: CityInterface[]) => {
          this.citiesByState = cities;
          console.log(cities, 'Resposta da API (cidades)');
        });
    }
  }

  // Carrega os bairros com base na cidade selecionada
  onAddCity() {
    if (this.selectedCityId) {
      this.addressService
        .fetchNeighborhoodByCityId(this.selectedCityId)
        .subscribe((neighborhoods: NeighborhoodInterface[]) => {
          this.neighborhoodByCity = neighborhoods;
          console.log(neighborhoods, 'Resposta da API (bairros)');
        });
    }
  }*/

  /*onAddState() {
    this.addressService
      .fetchCitiesByStateId(this.selectedStateId)
      .subscribe((cities: CityInterface[]) => {
        this.citiesByState = cities;
        console.log(cities, "cresposta da api cities")
      });
    onAddCity() {
    this.addressService
      .fetchNeighborhoodByCityId(this.selectedCityId)
      .subscribe((neighborhood: NeighborhoodInterface[]) => {
        this.neighborhoodByCity = neighborhood;
        console.log(neighborhood,'resposta da api neighborhood')
      });
  }*/

  ngOnInit(): void {
    this.step2Form = this.fb.group({
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      neighborhood: [''],
    });

    this.addressService.fetchStates().subscribe((state) => {
      this.states = state;
    });

    this.step2Form.get('state')?.valueChanges.subscribe((state) => {
      console.log('if state', state);
      if (state) {
        this.addressService.fetchCitiesByStateId(state).subscribe((cities) => {
          console.log(cities);
          this.citiesByState = cities;
          this.neighborhoodByCity = [];
          this.step2Form.get('neighborhood')?.setValue('')
        });
      }
    });

    this.step2Form.get('city')?.valueChanges.subscribe((city) => {
      console.log('if city', city);
      if (city.id) {
        this.addressService
          .fetchNeighborhoodByCityId(city.id)
          .subscribe((neighborhoods) => {
            console.log(neighborhoods);
            this.neighborhoodByCity = neighborhoods;
        });
      }
    });

    /*this.step2Form
      .get('state')
      ?.valueChanges.subscribe((state: StateInterface) => {
          this.selectedStateId = state.id;
          this.onAddState();
          this.step2Form.get('city')?.reset();
          this.citiesByState = [];
          this.neighborhoodByCity = [];
        
      });

    // Atualiza os bairros quando a cidade for selecionada
    this.step2Form
      .get('city')
      ?.valueChanges.subscribe((city: CityInterface) => {
          this.selectedCityId = city.id;
          this.onAddCity();
          this.step2Form.get('neighborhood')?.reset(); // Reseta o bairro quando a cidade muda
          this.neighborhoodByCity = [];
        
      });*/
  }

  nextStep() {
    console.log(this.step2Form.valid);
    if (this.step2Form.valid) {
      this.signUpService.setStep2Data(this.step2Form.value);
      this.router.navigate(['sign-up/profile']);
    }
  }
}
