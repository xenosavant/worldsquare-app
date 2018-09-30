import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';

import { ConfigService } from './services/config/config.service';
import { FieldErrorComponent } from './components/field-error/field-error.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { GooglePlacesDirective } from './directives/google-places/google-places.directive';

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
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        FieldErrorComponent,
        DropdownComponent,
        GooglePlacesDirective
    ],
    exports: [
        FieldErrorComponent,
        DropdownComponent,
        GooglePlacesDirective
    ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: loadConfigService , deps: [ConfigService], multi: true }
    ]
})
export class SharedModule { }
