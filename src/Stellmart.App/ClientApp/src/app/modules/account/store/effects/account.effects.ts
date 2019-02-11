import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { AccountActionTypes } from '../actions/account.actions';

@Injectable()
export class AccountEffects {
  @Effect()
  private loadAccount$ = this.actions$.pipe(
    ofType(AccountActionTypes.LoadAccount)
  );

  constructor(private actions$: Actions) {}
}
