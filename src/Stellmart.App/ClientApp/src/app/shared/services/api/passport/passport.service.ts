import { Injectable } from '@angular/core';
import { YotiRequest } from '../../../models/passport/yoti-request.model';
import { YotiResponse } from '../../../models/passport/yoti-response.model';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../../config/config.service';
import { HttpClientService } from '../../http/http-client.service';

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
