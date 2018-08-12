import { Injectable } from '@angular/core';
import { UserResponse } from '../../models/user/user-response.model';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../config/config.service';
import { HttpClientService } from '../http/http-client.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private baseUrl: string = APP_CONFIG.AppSettings.ApiUrl;

    constructor(
        private httpService: HttpClientService
    ) { }

    public getCurrentLoggedUser(): Observable<UserResponse> {
        return this.httpService.get(this.baseUrl + '/api/user/me');
    }
}
