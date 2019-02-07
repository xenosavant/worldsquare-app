import { Injectable } from '@angular/core';
import { YotiRequest } from '../models/yoti-request.model';
import { YotiResponse } from '../models/yoti-response.model';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../../../shared/services/config/config.service';
import { HttpClientService } from '../../../shared/services/http/http-client.service';

@Injectable({
    providedIn: 'root'
})
export class PassportService {

    private baseUrl: string = APP_CONFIG.AppSettings.ApiUrl;

    constructor(
        private httpService: HttpClientService
    ) { }

    public verifyYoti(request: YotiRequest): Observable<YotiResponse> {
        return this.httpService.post(this.baseUrl + '/api/yoti', request);
    }
}
