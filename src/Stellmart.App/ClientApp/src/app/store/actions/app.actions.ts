import { Action } from '@ngrx/store';
import { AppConfig } from '../../app.config';

export enum AppActionTypes {
  LoadConfig = '[App] Load Config',
  LoadConfigError = '[App] Load Config Error',
  LoadConfigSuccess = '[App] Load Config Success'
}

export class LoadConfig implements Action {
  public readonly type = AppActionTypes.LoadConfig;
}

export class LoadConfigError implements Action {
  public readonly type = AppActionTypes.LoadConfigError;
  constructor(public payload: any) {}
}

export class LoadConfigSuccess implements Action {
  public readonly type = AppActionTypes.LoadConfigSuccess;
  constructor(public payload: AppConfig) {}
}

export type AppActions = LoadConfig | LoadConfigError | LoadConfigSuccess;

export const fromAppActions: any = {
  LoadConfig,
  LoadConfigError,
  LoadConfigSuccess
};
