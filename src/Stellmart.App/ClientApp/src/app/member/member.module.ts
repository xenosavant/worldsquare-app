import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PassportComponent } from './passport/passport.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        MemberRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        ProfileComponent,
        PassportComponent,
        SidebarComponent,
        ShippingAddressComponent
    ]
})
export class MemberModule { }
