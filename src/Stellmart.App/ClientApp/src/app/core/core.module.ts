import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        AngularFontAwesomeModule,
        HttpClientModule,
        SharedModule
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
    ]
})
export class CoreModule { }
