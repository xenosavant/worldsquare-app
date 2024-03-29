import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';

import { StoreModule } from '@ngrx/store';
import * as fromAccount from './store/reducers/account.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './store/effects/account.effects';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('account', fromAccount.reducer),
    EffectsModule.forFeature([AccountEffects])
  ],
  declarations: [...fromComponents.components, ...fromContainers.containers],
  exports: [...fromComponents.components, ...fromContainers.containers]
})
export class AccountModule {}
