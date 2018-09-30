import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassportComponent } from './passport/passport.component';
import { ProfileComponent } from './profile/profile.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';

const routes: Routes = [
    {
        path: 'passport',
        component: PassportComponent,
        pathMatch: 'full'
    },
    {
        path: 'passport/:token',
        component: PassportComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        pathMatch: 'full'
    },
    {
        path: 'shipping-address',
        component: ShippingAddressComponent,
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
