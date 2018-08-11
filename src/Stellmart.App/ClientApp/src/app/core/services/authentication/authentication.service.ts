import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthValidationService } from './auth-validation.service';
import { Router } from '@angular/router';
import { JwtKeys } from '../../../shared/models/jwt-keys';
import { AuthConfigurationService } from '../config/auth-config.service';
import { StorageService } from '../storage/storage.service';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    public HasAdminRole: boolean;
    public HasUserAdminRole: boolean;
    public _isAuthorized: boolean;
    public jwtKeys: JwtKeys;

    constructor
        (
        private http: HttpClient,
        private authConfigService: AuthConfigurationService,
        private router: Router,
        private authValidationService: AuthValidationService,
        private storageService: StorageService
        ) {
        if (storageService.retrieve('_isAuthorized') !== '') {
            this.HasAdminRole = storageService.retrieve('HasAdminRole');
            this._isAuthorized = storageService.retrieve('_isAuthorized');
        }
    }

    public isAuthorized(): boolean {
        if (this._isAuthorized) {
            if (this.authValidationService.IsTokenExpired(this.storageService.retrieve('authorizationDataIdToken'))) {
                console.log('IsAuthorized: isTokenExpired');
                this.ResetAuthorizationData();
                return false;
            }
            return true;
        }
        return false;
    }

    public GetToken(): Observable<string> {
        return of(this.storageService.retrieve('jwt'));
    }

    public ResetAuthorizationData(): void {
        this.storageService.store('jwt', '');
        this.storageService.store('authorizationDataIdToken', '');

        this._isAuthorized = false;
        this.HasAdminRole = false;
        this.storageService.store('HasAdminRole', false);
        this.storageService.store('HasUserAdminRole', false);
        this.storageService.store('_isAuthorized', false);
    }

    public SetAuthorizationData(token: any, id_token: any): void {
        if (this.storageService.retrieve('jwt') !== '') {
            this.storageService.store('jwt', '');
        }

        console.log(token);
        console.log(id_token);
        console.log('storing to storage, getting the roles');
        this.storageService.store('jwt', token);
        this.storageService.store('authorizationDataIdToken', id_token);
        this._isAuthorized = true;
        this.storageService.store('_isAuthorized', true);
    }

    public Authorize(): void {
        this.ResetAuthorizationData();

        console.log('BEGIN Authorize, no auth data');

        const authorizationUrl: string = this.authConfigService.server + '/connect/authorize';
        const client_id: string = this.authConfigService.client_id;
        const redirect_uri: string = this.authConfigService.redirect_url;
        const response_type: string = this.authConfigService.response_type;
        const scope: string = this.authConfigService.scope;
        const nonce: string = 'N' + Math.random() + '' + Date.now();
        const state: string = Date.now() + '' + Math.random();

        this.storageService.store('authStateControl', state);
        this.storageService.store('authNonce', nonce);
        console.log('AuthorizedController created. adding myautostate: ' + this.storageService.retrieve('authStateControl'));

        const url: string =
            authorizationUrl + '?' +
            'response_type=' + encodeURI(response_type) + '&' +
            'client_id=' + encodeURI(client_id) + '&' +
            'redirect_uri=' + encodeURI(redirect_uri) + '&' +
            'scope=' + encodeURI(scope) + '&' +
            'nonce=' + encodeURI(nonce) + '&' +
            'state=' + encodeURI(state);

        window.location.href = url;
    }

    public AuthorizedCallback(): void {
        console.log('BEGIN AuthorizedCallback, no auth data');
        this.ResetAuthorizationData();

        if (isPlatformBrowser) {
            const hash: string = window.location.hash.substr(1);

            const result: any = hash.split('&').reduce(function (res: any, item: string): any {
                const parts: string[] = item.split('=');
                res[parts[0]] = parts[1];
                return res;
            }, {});

            console.log(result);
            console.log('AuthorizedCallback created, begin token validation');

            let token: string = '';
            let id_token: string = '';
            let authResponseIsValid: boolean = false;

            this.getSigningKeys()
                .subscribe((jwtKeys: JwtKeys) => {
                    this.jwtKeys = jwtKeys;

                    if (!result.error) {

                        // validate state
                        if (this.authValidationService.ValidateStateFromHashCallback(result.state, this.storageService.retrieve('authStateControl'))) {
                            token = result.access_token;
                            id_token = result.id_token;
                            const decoded: any = this.authValidationService.GetPayloadFromToken(id_token, false);
                            // let headerDecoded: any = this.authValidationService.GetHeaderFromToken(id_token, false);

                            // validate jwt signature
                            if (this.authValidationService.Validate_signature_id_token(id_token, this.jwtKeys)) {
                                // validate nonce
                                if (this.authValidationService.Validate_id_token_nonce(decoded, this.storageService.retrieve('authNonce'))) {
                                    // validate iss
                                    if (this.authValidationService.Validate_id_token_iss(decoded, this.authConfigService.iss)) {
                                        // validate aud
                                        if (this.authValidationService.Validate_id_token_aud(decoded, this.authConfigService.client_id)) {
                                            // valiadate at_hash and access_token
                                            if (this.authValidationService.Validate_id_token_at_hash(token, decoded.at_hash) || !token) {
                                                this.storageService.store('authNonce', '');
                                                this.storageService.store('authStateControl', '');

                                                authResponseIsValid = true;
                                                console.log('AuthorizedCallback state, nonce, iss, aud, signature validated, returning token');
                                            } else {
                                                console.log('AuthorizedCallback incorrect aud');
                                            }
                                        } else {
                                            console.log('AuthorizedCallback incorrect aud');
                                        }
                                    } else {
                                        console.log('AuthorizedCallback incorrect iss');
                                    }
                                } else {
                                    console.log('AuthorizedCallback incorrect nonce');
                                }
                            } else {
                                console.log('AuthorizedCallback incorrect Signature id_token');
                            }
                        } else {
                            console.log('AuthorizedCallback incorrect state');
                        }
                    }

                    if (authResponseIsValid) {
                        this.SetAuthorizationData(token, id_token);
                        this.router.navigate(['']);
                    } else {
                        this.ResetAuthorizationData();
                    }
                });
        }
    }

    public Logoff(): void {
        console.log('BEGIN Authorize, no auth data');

        const authorizationEndsessionUrl: string = this.authConfigService.server + '/connect/endsession';

        const id_token_hint: string = this.storageService.retrieve('authorizationDataIdToken');
        const post_logout_redirect_uri: string = this.authConfigService.post_logout_redirect_uri;

        const url: string =
            authorizationEndsessionUrl + '?' +
            'id_token_hint=' + encodeURI(id_token_hint) + '&' +
            'post_logout_redirect_uri=' + encodeURI(post_logout_redirect_uri);

        this.ResetAuthorizationData();

        if (isPlatformBrowser) {
            window.location.href = url;
        }
    }

    private getSigningKeys(): Observable<JwtKeys> {
        return this.http.get<JwtKeys>(this.authConfigService.jwks_url);
    }
}
