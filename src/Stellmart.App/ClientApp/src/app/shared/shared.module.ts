import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';

import { FieldErrorComponent } from './components/field-error/field-error.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { GooglePlacesDirective } from './directives/google-places/google-places.directive';

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
    ]
})
export class SharedModule { }
