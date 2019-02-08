import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';



import { CoreActionTypes } from '../actions/core.actions';

@Injectable()
export class CoreEffects {


  @Effect()
  loadCores$ = this.actions$.pipe(ofType(CoreActionTypes.LoadCores));


  constructor(private actions$: Actions) {}

}
