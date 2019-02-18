import { Injectable } from '@angular/core';
import { UserResponse } from '../../../models/user/user-response.model';
import { Observable } from 'rxjs';
import { HttpClientService } from '../../http/http-client.service';
import { UserBalanceResponse } from '../../../../core/models/user-balance-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService: HttpClientService) {}

  public getCurrentLoggedUser(): Observable<UserResponse> {
    return this.httpService.get('/api/user/me');
  }

  public getBalance(): Observable<UserBalanceResponse> {
    return this.httpService.get('/api/user/balance');
  }
}
