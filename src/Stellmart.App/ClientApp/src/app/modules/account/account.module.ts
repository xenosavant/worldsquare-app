import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';

import { StoreModule } from '@ngrx/store';
import * as fromAccount from './store/reducers/account.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './store/effects/account.effects';

import * as fromComponents from './components';
import { ConfirmEmailComponent } from './containers/confirm-email/confirm-email.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
import { SignupComponent } from './containers/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    StoreModule.forFeature('account', fromAccount.reducer),
    EffectsModule.forFeature([AccountEffects])
  ],
  declarations: [...fromComponents.components, ConfirmEmailComponent, ForgotPasswordComponent, ResetPasswordComponent, SignupComponent],
  exports: [...fromComponents.components]
})
export class AccountModule { }
