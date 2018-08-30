import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../config/config.service';
import { HttpClientService } from '../http/http-client.service';
import { SignupRequest } from '../../models/account/signup-request.model';
import { SignupResponse } from '../../models/account/signup-response.model';
import { Observable } from 'rxjs';
import { SecurityQuestionsResponse } from '../../models/account/security-questions-response.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl: string = APP_CONFIG.AppSettings.ApiUrl;

  constructor(
    private httpService: HttpClientService
  ) { }

  public signup(request: SignupRequest): Observable<SignupResponse> {
    return this.httpService.post(this.baseUrl + '/api/account', request);
  }

  public getSecurityQuestions(): Observable<SecurityQuestionsResponse[]> {
    return this.httpService.get(this.baseUrl + '/api/account/securityquestions');
  }
}
