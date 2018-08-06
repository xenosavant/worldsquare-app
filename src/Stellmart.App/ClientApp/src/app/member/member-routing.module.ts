import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassportComponent } from './passport/passport.component';
import { AuthGuardService } from '../core/services/authentication/auth-guard.service';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: 'passport',
        component: PassportComponent,
        pathMatch: 'full'
    },
    {
        path: 'profile',
        component: ProfileComponent,
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
