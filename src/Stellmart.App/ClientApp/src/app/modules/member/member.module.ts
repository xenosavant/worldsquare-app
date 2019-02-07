import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import * as fromComponents from './components';

@NgModule({
    imports: [
        CommonModule,
        MemberRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [...fromComponents.components],
    exports: [...fromComponents.components]
})
export class MemberModule { }
