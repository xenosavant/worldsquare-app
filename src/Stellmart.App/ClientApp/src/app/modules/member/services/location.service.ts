import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../../shared/services/config/config.service';
import { HttpClientService } from '../../../shared/services/http/http-client.service';
import { Observable } from 'rxjs';
import { LocationRequest } from '../models/location-request.model';
import { LocationResponse } from '../models/location-response.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private baseUrl: string = APP_CONFIG.AppSettings.ApiUrl;

  constructor(private httpService: HttpClientService) {}

  public save(request: LocationRequest): Observable<LocationResponse> {
    return this.httpService.post(this.baseUrl + '/api/location', request);
  }

  public setDefault(request: LocationRequest): Observable<LocationResponse> {
    return this.httpService.patch(
      this.baseUrl + '/api/location/setDefault',
      request
    );
  }

  public delete(request: LocationRequest): Observable<LocationResponse> {
    return this.httpService.patch(
      this.baseUrl + '/api/location/delete',
      request
    );
  }

  public getShippingAddresses(): Observable<LocationResponse[]> {
    return this.httpService.get(this.baseUrl + '/api/location/user');
  }
}
