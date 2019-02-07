import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';



import { AccountActionTypes } from '../actions/account.actions';

@Injectable()
export class AccountEffects {


  @Effect()
  loadAccounts$ = this.actions$.pipe(ofType(AccountActionTypes.LoadAccounts));


  constructor(private actions$: Actions) {}

}
