import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../shared/services/http/http-client.service';
import { SignupRequest } from '../models/signup-request.model';
import { SignupResponse } from '../models/signup-response.model';
import { Observable } from 'rxjs';
import { SecurityQuestionsResponse } from '../models/security-questions-response.model';
import { ResetPasswordResponse } from '../models/reset-password-response.model';
import { ResetPasswordRequest } from '../models/reset-password-request.model';
import { ForgotPasswordRequest } from '../models/forgot-password-request.model';
import { ForgotPasswordResponse } from '../models/forgot-password-response.model';
import { ConfirmEmailRequest } from 'src/app/modules/account/models/confirm-email-request.model';
import { ConfirmEmailResponse } from 'src/app/modules/account/models/confirm-email-response.model';
import { HttpParams } from '@angular/common/http';
import { Dictionary } from 'src/app/shared/models/dictionary.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private httpService: HttpClientService) {}

  public signup(request: SignupRequest): Observable<SignupResponse> {
    return this.httpService.post('/api/account/signup', request);
  }

  public getSecurityQuestions(): Observable<SecurityQuestionsResponse[]> {
    return this.httpService.get('/api/account/securityquestions');
  }

  public getSecurityQuestionsForUser(
    paramsDictionary: Dictionary[]
  ): Observable<SecurityQuestionsResponse[]> {
    const params: HttpParams = this.httpService.buildHttpParams(
      paramsDictionary
    );

    return this.httpService.get(
      '/api/account/securityquestionsforuser',
      params
    );
  }

  public resetPassword(
    request: ResetPasswordRequest
  ): Observable<ResetPasswordResponse> {
    return this.httpService.post('/api/account/resetpassword', request);
  }

  public forgotPassword(
    request: ForgotPasswordRequest
  ): Observable<ForgotPasswordResponse> {
    return this.httpService.post('/api/account/forgotpassword', request);
  }

  public confirmEmail(
    request: ConfirmEmailRequest
  ): Observable<ConfirmEmailResponse> {
    return this.httpService.post('/api/account/confirmemail', request);
  }
}
