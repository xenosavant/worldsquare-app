import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthGuardService } from './services/authentication/auth-guard.service';
import { ConfigService } from './services/config/config.service';

/**
* Exported function so that it works with AOT
* @param {ConfigService} configService
* @returns {Function}
*/
export function loadConfigService(configService: ConfigService): Function {
  return () => configService.load();
}

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthenticationService,
        AuthGuardService,
        ConfigService,
        { provide: APP_INITIALIZER, useFactory: loadConfigService , deps: [ConfigService], multi: true }
    ]
})
export class SharedModule { }
