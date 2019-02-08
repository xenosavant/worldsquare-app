import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [...fromComponents.components, ...fromContainers.containers],
  exports: [
    RouterModule,
    ...fromComponents.components,
    ...fromContainers.containers
  ]
})
export class CoreModule {}
