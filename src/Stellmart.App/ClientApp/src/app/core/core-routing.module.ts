import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './account/signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from '../shared/services/authentication/auth-guard.service';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './account/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password/:userId/:code',
    component: ResetpasswordComponent
  },
  {
    path: 'member',
    canActivate: [AuthGuardService],
    loadChildren: '../member/member.module#MemberModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
