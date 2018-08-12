import { Injectable } from '@angular/core';
import { APP_CONFIG } from './config.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthConfigurationService {
    public iss: string = APP_CONFIG.AppSettings.AuthUrl;

    public server: string = APP_CONFIG.AppSettings.AuthUrl;

    public redirect_url: string = APP_CONFIG.AppSettings.AppUrl;

    // This is required to get the signing keys so that the signiture of the Jwt can be validated.
    public jwks_url: string = APP_CONFIG.AppSettings.AuthUrl + '/.well-known/openid-configuration/jwks';

    public client_id: string = 'implicitclient';

    public response_type: string = 'id_token token';

    public scope: string = 'api1 openid profile';

    public post_logout_redirect_uri: string = APP_CONFIG.AppSettings.AppUrl;
}
