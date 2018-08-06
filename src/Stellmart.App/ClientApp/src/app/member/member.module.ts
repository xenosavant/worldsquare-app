import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PassportComponent } from './passport/passport.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        MemberRoutingModule
    ],
    declarations: [
        ProfileComponent,
        PassportComponent,
        SidebarComponent
    ]
})
export class MemberModule { }
