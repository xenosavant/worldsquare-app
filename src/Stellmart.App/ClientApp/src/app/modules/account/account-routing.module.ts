import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromComponents from './components';

const routes: Routes = [
    {
        path: 'signup',
        component: fromComponents.SignupComponent
    },
    {
        path: 'forgot-password',
        component: fromComponents.ForgotPasswordComponent
    },
    {
        path: 'reset-password/:userId/:code',
        component: fromComponents.ResetpasswordComponent
    },
    {
        path: 'confirm-email/:userId/:code',
        component: fromComponents.ConfirmEmailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
