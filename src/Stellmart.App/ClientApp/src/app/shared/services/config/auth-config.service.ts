import { Injectable } from '@angular/core';
import { AppFacade } from '../../../store/facades/app,facade';
import { AppConfig } from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthConfigurationService {
  public iss: string;

  public server: string;

  public redirect_url: string;

  // This is required to get the signing keys so that the signiture of the Jwt can be validated.
  public jwks_url: string;

  public client_id: string = 'implicitclient';

  public response_type: string = 'id_token token';

  public scope: string = 'api1 openid profile';

  public post_logout_redirect_uri: string;

  constructor(private appFacade: AppFacade) {
    appFacade.getConfig.subscribe((config: AppConfig) => {
      this.iss = config.AppSettings.AuthUrl;
      this.server = config.AppSettings.AuthUrl;
      this.redirect_url = config.AppSettings.AppUrl;
      this.jwks_url =
        config.AppSettings.AuthUrl + '/.well-known/openid-configuration/jwks';
      this.post_logout_redirect_uri = config.AppSettings.AppUrl;
    });
  }
}
