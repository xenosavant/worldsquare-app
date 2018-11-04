import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../config/config.service';
import { HttpClientService } from '../../http/http-client.service';
import { SignupRequest } from '../../../models/account/signup-request.model';
import { SignupResponse } from '../../../models/account/signup-response.model';
import { Observable } from 'rxjs';
import { SecurityQuestionsResponse } from '../../../models/account/security-questions-response.model';
import { ResetPasswordResponse } from 'src/app/shared/models/account/reset-password-response.model';
import { ResetPasswordRequest } from 'src/app/shared/models/account/reset-password-request.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl: string = APP_CONFIG.AppSettings.ApiUrl;

  constructor(
    private httpService: HttpClientService
  ) { }

  public signup(request: SignupRequest): Observable<SignupResponse> {
    return this.httpService.post(this.baseUrl + '/api/account/signup', request);
  }

  public getSecurityQuestions(): Observable<SecurityQuestionsResponse[]> {
    return this.httpService.get(this.baseUrl + '/api/account/securityquestions');
  }

  public resetPassword(request: ResetPasswordRequest): Observable<ResetPasswordResponse> {
    return this.httpService.post(this.baseUrl + '/api/account/resetpassword', request);
  }
}
