import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';
import { CoreRoutingModule } from './core-routing.module';

import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule
    ],
    declarations: [
        SignupComponent,
        FooterComponent,
        HeaderComponent,
        NotFoundComponent
    ],
    exports: [
        RouterModule,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        AuthenticationService,
        AuthGuardService
    ]
})
export class CoreModule { }
