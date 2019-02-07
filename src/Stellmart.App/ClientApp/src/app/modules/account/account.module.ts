import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';

import * as fromComponents from './components';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components]
})
export class AccountModule { }
