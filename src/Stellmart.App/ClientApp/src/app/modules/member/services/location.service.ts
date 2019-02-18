import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../shared/services/http/http-client.service';
import { Observable } from 'rxjs';
import { LocationRequest } from '../models/location-request.model';
import { LocationResponse } from '../models/location-response.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private httpService: HttpClientService) {}

  public save(request: LocationRequest): Observable<LocationResponse> {
    return this.httpService.post('/api/location', request);
  }

  public setDefault(request: LocationRequest): Observable<LocationResponse> {
    return this.httpService.patch('/api/location/setDefault', request);
  }

  public delete(request: LocationRequest): Observable<LocationResponse> {
    return this.httpService.patch('/api/location/delete', request);
  }

  public getShippingAddresses(): Observable<LocationResponse[]> {
    return this.httpService.get('/api/location/user');
  }
}
