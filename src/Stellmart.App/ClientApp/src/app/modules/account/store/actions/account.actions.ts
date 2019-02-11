import { Action } from '@ngrx/store';

export enum AccountActionTypes {
  LoadAccount = '[Account] Load Account',
  LoadAccountFail = '[Account] Load Account Fail',
  LoadAccountSuccess = '[Account] Load Account Success'
}

export class LoadAccount implements Action {
  public readonly type: string = AccountActionTypes.LoadAccount;
}

export class LoadAccountFail implements Action {
  public readonly type: string = AccountActionTypes.LoadAccountFail;
  constructor(public payload: any) {}
}

export class LoadAccountSuccess implements Action {
  public readonly type: string = AccountActionTypes.LoadAccountSuccess;
  constructor(public payload: string) {}
}

export type AccountActions = LoadAccount | LoadAccountFail | LoadAccountSuccess;

export const fromAccountActions: any = {
  LoadAccount,
  LoadAccountFail,
  LoadAccountSuccess
};
