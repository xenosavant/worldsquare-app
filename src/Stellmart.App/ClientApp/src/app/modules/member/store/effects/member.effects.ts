import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';



import { MemberActionTypes } from '../actions/member.actions';

@Injectable()
export class MemberEffects {


  @Effect()
  loadMembers$ = this.actions$.pipe(ofType(MemberActionTypes.LoadMembers));


  constructor(private actions$: Actions) {}

}
