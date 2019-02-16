import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppActionTypes } from '../actions/app.actions';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AppConfig } from '../../app.config';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  @Effect()
  private loadConfig$: any = this.actions$.pipe(
    ofType(AppActionTypes.LoadConfig),
    mergeMap(() =>
      this.httpClient.get('assets/appsettings.json').pipe(
        map((response: AppConfig) => ({
          type: AppActionTypes.LoadConfigSuccess,
          payload: response
        })),
        catchError(() => of({ type: AppActionTypes.LoadConfigError }))
      )
    )
  );
}
