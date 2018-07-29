import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { AuthenticationService } from './services/authentication/authentication.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
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
        CommonModule,
        CoreRoutingModule,
        AngularFontAwesomeModule,
        HttpClientModule
    ],
    declarations: [
        SignupComponent,
        FooterComponent,
        HeaderComponent,
        NotFoundComponent,
        HomeComponent
    ],
    exports: [
        RouterModule,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        AuthenticationService,
        AuthGuardService,
        ConfigService,
        { provide: APP_INITIALIZER, useFactory: loadConfigService , deps: [ConfigService], multi: true }
    ]
})
export class CoreModule { }
