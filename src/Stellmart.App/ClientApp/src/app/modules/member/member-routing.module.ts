import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromComponents from './components';

const routes: Routes = [
    {
        path: 'passport',
        component: fromComponents.PassportComponent,
        pathMatch: 'full'
    },
    {
        path: 'passport/:token',
        component: fromComponents.PassportComponent
    },
    {
        path: 'profile',
        component: fromComponents.ProfileComponent,
        pathMatch: 'full'
    },
    {
        path: 'shipping-address',
        component: fromComponents.ShippingAddressComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MemberRoutingModule { }
