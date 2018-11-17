import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

import { SignupComponent } from './account/signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './account/reset-password/reset-password.component';
import { ConfirmEmailComponent } from './account/confirm-email/confirm-email.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    SignupComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ResetpasswordComponent,
    ConfirmEmailComponent
  ],
  exports: [RouterModule, HeaderComponent, FooterComponent]
})
export class CoreModule { }
