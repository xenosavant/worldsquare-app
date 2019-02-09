import { Action } from '@ngrx/store';

export enum MemberActionTypes {
  LoadMembers = '[Member] Load Members',
  
  
}

export class LoadMembers implements Action {
  readonly type = MemberActionTypes.LoadMembers;
}


export type MemberActions = LoadMembers;
