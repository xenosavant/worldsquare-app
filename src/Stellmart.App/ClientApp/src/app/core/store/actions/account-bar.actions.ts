import { Action } from '@ngrx/store';

export enum AccountBarActionTypes {
  LoadAccountBar = '[AccountBar] Load Account Bar',
  LoadAccountBarError = '[AccountBar] Load Account Bar Error',
  LoadAccountBarSuccess = '[AccountBar] Load Account Bar Success'
}

export class LoadAccountBar implements Action {
  public readonly type: any = AccountBarActionTypes.LoadAccountBar;
}

export class LoadAccountBarError implements Action {
  public readonly type: any = AccountBarActionTypes.LoadAccountBarError;
  constructor(public payload: any) {}
}

export class LoadAccountBarSuccess implements Action {
  public readonly type: any = AccountBarActionTypes.LoadAccountBarSuccess;
  constructor(public payload: any) {}
}

export type AccountBarActions =
  | LoadAccountBar
  | LoadAccountBarError
  | LoadAccountBarSuccess;

export const fromAccountBarActions: any = {
  LoadAccountBar,
  LoadAccountBarError,
  LoadAccountBarSuccess
};
