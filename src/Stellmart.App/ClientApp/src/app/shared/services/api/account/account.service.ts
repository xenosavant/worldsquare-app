import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../config/config.service';
import { HttpClientService } from '../../http/http-client.service';
import { SignupRequest } from '../../../models/account/signup-request.model';
import { SignupResponse } from '../../../models/account/signup-response.model';
import { Observable } from 'rxjs';
import { SecurityQuestionsResponse } from '../../../models/account/security-questions-response.model';
import { ResetPasswordResponse } from '../../../models/account/reset-password-response.model';
import { ResetPasswordRequest } from '../../../models/account/reset-password-request.model';
import { ForgotPasswordRequest } from '../../../models/account/forgot-password-request.model';
import { ForgotPasswordResponse } from '../../../models/account/forgot-password-response.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl: string = APP_CONFIG.AppSettings.ApiUrl;

  constructor(private httpService: HttpClientService) {}

  public signup(request: SignupRequest): Observable<SignupResponse> {
    return this.httpService.post(this.baseUrl + '/api/account/signup', request);
  }

  public getSecurityQuestions(): Observable<SecurityQuestionsResponse[]> {
    return this.httpService.get(
      this.baseUrl + '/api/account/securityquestions'
    );
  }

  public resetPassword(
    request: ResetPasswordRequest
  ): Observable<ResetPasswordResponse> {
    return this.httpService.post(
      this.baseUrl + '/api/account/resetpassword',
      request
    );
  }

  public forgotPassword(
    request: ForgotPasswordRequest
  ): Observable<ForgotPasswordResponse> {
    return this.httpService.post(
      this.baseUrl + '/api/account/forgotpassword',
      request
    );
  }
}
