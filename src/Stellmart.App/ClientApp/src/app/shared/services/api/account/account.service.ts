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
import { ConfirmEmailRequest } from 'src/app/shared/models/account/confirm-email-request.model';
import { ConfirmEmailResponse } from 'src/app/shared/models/account/confirm-email-response.model';
import { SecurityQuestionsRequest } from 'src/app/shared/models/account/security-questions-request.model';
import { HttpParams } from '@angular/common/http';
import { Dictionary } from 'src/app/shared/models/dictionary.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl: string = APP_CONFIG.AppSettings.ApiUrl;

  constructor(private httpService: HttpClientService) { }

  public signup(request: SignupRequest): Observable<SignupResponse> {
    return this.httpService.post(this.baseUrl + '/api/account/signup', request);
  }

  public getSecurityQuestions(): Observable<SecurityQuestionsResponse[]> {
    return this.httpService.get(
      this.baseUrl + '/api/account/securityquestions'
    );
  }

  public getSecurityQuestionsForUser(paramsDictionary: Dictionary[]): Observable<SecurityQuestionsResponse[]> {
    const params: HttpParams = this.httpService.buildHttpParams(paramsDictionary);

    return this.httpService.get(
      this.baseUrl + '/api/account/securityquestionsforuser',
      params
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

  public confirmEmail(
    request: ConfirmEmailRequest
  ): Observable<ConfirmEmailResponse> {
    return this.httpService.post(
      this.baseUrl + '/api/account/confirmemail',
      request
    );
  }
}
