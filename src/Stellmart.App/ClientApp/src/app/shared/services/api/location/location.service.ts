import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../config/config.service';
import { HttpClientService } from '../../http/http-client.service';
import { Observable } from 'rxjs';
import { LocationRequest } from '../../../models/location/location-request.model';
import { LocationResponse } from '../../../models/location/location-response.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseUrl: string = APP_CONFIG.AppSettings.ApiUrl;

  constructor(
    private httpService: HttpClientService
  ) { }

  public create(request: LocationRequest): Observable<LocationResponse> {
    return this.httpService.post(this.baseUrl + '/api/location', request);
  }

  public getShippingAddresses(): Observable<LocationResponse[]> {
    return this.httpService.get(this.baseUrl + '/api/location/user');
  }
}
