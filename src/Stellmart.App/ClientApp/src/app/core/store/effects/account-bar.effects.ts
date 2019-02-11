import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { AccountBarActionTypes } from '../actions/account-bar.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AccountBarService } from '../../services/account-bar.service';
import { UserBalanceResponse } from '../../models/user-balance-response.model';
import { of } from 'rxjs';

@Injectable()
export class CoreEffects {
  constructor(
    private actions$: Actions,
    private accountBarService: AccountBarService
  ) {}

  @Effect()
  private loadAccountBar$: any = this.actions$.pipe(
    ofType(AccountBarActionTypes.LoadAccountBar),
    mergeMap(() =>
      this.accountBarService.getBalance().pipe(
        map((response: UserBalanceResponse) => ({
          type: AccountBarActionTypes.LoadAccountBarSuccess,
          payload: response.balance
        })),
        catchError(() =>
          of({ type: AccountBarActionTypes.LoadAccountBarError })
        )
      )
    )
  );
}
