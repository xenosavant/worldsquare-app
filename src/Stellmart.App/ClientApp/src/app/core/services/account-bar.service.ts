import { Injectable } from '@angular/core';
import { HttpClientService } from '../../shared/services/http/http-client.service';
import { Observable } from 'rxjs/internal/Observable';
import { UserBalanceResponse } from '../models/user-balance-response.model';

@Injectable({
  providedIn: 'root'
})
export class AccountBarService {
  constructor(private httpService: HttpClientService) {}

  public getBalance(): Observable<UserBalanceResponse> {
    return this.httpService.get('/api/user/balance');
  }
}
