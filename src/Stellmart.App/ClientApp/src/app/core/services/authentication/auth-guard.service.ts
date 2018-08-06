import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor
        (
        private authenticationService: AuthenticationService
        ) { }

    public canActivate(): boolean {
        if (this.authenticationService.isAuthorized()) {
            return true;
        }

        return false;
    }
}
