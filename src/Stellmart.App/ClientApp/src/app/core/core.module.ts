import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import * as fromComponents from './components';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [...fromComponents.components],
  exports: [RouterModule, fromComponents.HeaderComponent, fromComponents.FooterComponent]
})
export class CoreModule { }
