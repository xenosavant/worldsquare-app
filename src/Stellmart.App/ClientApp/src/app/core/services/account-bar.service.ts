import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../shared/services/config/config.service';
import { HttpClientService } from '../../shared/services/http/http-client.service';
import { Observable } from 'rxjs/internal/Observable';
import { UserBalanceResponse } from '../models/user-balance-response.model';

@Injectable({
  providedIn: 'root'
})
export class AccountBarService {
  private baseUrl: string = APP_CONFIG.AppSettings.ApiUrl;

  constructor(private httpService: HttpClientService) {}

  public getBalance(): Observable<UserBalanceResponse> {
    return this.httpService.get(this.baseUrl + '/api/user/balance');
  }
}
