import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { StoreModule } from '@ngrx/store';
import * as fromMember from './store/reducers/member.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MemberEffects } from './store/effects/member.effects';

import * as fromComponents from './components';

@NgModule({
    imports: [
        CommonModule,
        MemberRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        StoreModule.forFeature('member', fromMember.reducer),
        EffectsModule.forFeature([MemberEffects])
    ],
    declarations: [...fromComponents.components],
    exports: [...fromComponents.components]
})
export class MemberModule { }
