import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';

import { StoreModule } from '@ngrx/store';
import * as fromAccount from './store/reducers/account.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './store/effects/account.effects';

import * as fromComponents from './components';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    StoreModule.forFeature('account', fromAccount.reducer),
    EffectsModule.forFeature([AccountEffects])
  ],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components]
})
export class AccountModule { }
