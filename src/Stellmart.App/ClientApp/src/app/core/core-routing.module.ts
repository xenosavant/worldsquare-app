import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/authentication/auth-guard.service';

import * as fromComponents from './components';

const routes: Routes = [
  {
    path: '',
    component: fromComponents.HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'member',
    canActivate: [AuthGuardService],
    loadChildren: '../modules/member/member.module#MemberModule'
  },
  {
    path: '**',
    component: fromComponents.NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
