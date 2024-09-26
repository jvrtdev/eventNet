import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { ApiServiceFactory } from '@core/common/factories/api.factory';
import { CityInterface } from '@core/shared/@types/api/city';
import { NeighborhoodInterface } from '@core/shared/@types/api/neighborhood';
import { StateInterface } from '@core/shared/@types/api/state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService extends ApiServiceFactory<StateInterface> {
  private stateUrl =
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';

  fetchStates(): Observable<StateInterface[]> {
    return this.http.get<StateInterface[]>(this.stateUrl);
  }

  fetchCitiesByStateId(stateId: number): Observable<CityInterface[]> {
    return this.http.get<CityInterface[]>(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`
    );
  }

  fetchNeighborhoodByCityId(cityId: number): Observable<NeighborhoodInterface[]> {
    return this.http.get<NeighborhoodInterface[]>(
      `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cityId}/subdistritos`
    );
  }
}
