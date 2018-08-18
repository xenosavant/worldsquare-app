import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigService } from './services/config/config.service';
import { FieldErrorComponent } from './components/field-error/field-error.component';

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
        CommonModule
    ],
    declarations: [
        FieldErrorComponent
    ],
    exports: [
        FieldErrorComponent
    ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: loadConfigService , deps: [ConfigService], multi: true }
    ]
})
export class SharedModule { }
