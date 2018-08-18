import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../config/config.service';
import { HttpClientService } from '../http/http-client.service';
import { SignupRequest } from '../../models/account/signup-request.model';
import { SignupResponse } from '../../models/account/signup-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl: string = APP_CONFIG.AppSettings.ApiUrl;

  constructor(
    private httpService: HttpClientService
  ) { }

  public register(request: SignupRequest): Observable<SignupResponse> {
    return this.httpService.post(this.baseUrl + '/api/yoti', request);
  }
}
