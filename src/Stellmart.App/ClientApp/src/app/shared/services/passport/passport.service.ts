import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../core/services/http/http-client.service';
import { RequestYoti } from '../../models/passport/request-yoti.model';
import { APP_CONFIG } from '../../../core/services/config/config.service';
import { ResponseYoti } from '../../models/passport/response-yoti.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PassportService {

    private baseUrl: string = APP_CONFIG.AppSettings.ApiUrl;

    constructor(
        private httpService: HttpClientService
    ) { }

    public VerifyYoti(request: RequestYoti): Observable<ResponseYoti> {
        return this.httpService.post(this.baseUrl + '/api/yoti', request, null);
    }
}
