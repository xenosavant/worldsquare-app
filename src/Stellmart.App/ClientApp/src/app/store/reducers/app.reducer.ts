import { AppActions, AppActionTypes } from '../actions/app.actions';
import { AppConfig } from '../../app.config';

export const APP_KEY: string = 'app_key';

export interface AppState {
  appConfig: AppConfig | undefined;
}

export const initialState: AppState = {
  appConfig: {
    AppSettings: {
      AppUrl: undefined,
      ApiUrl: undefined,
      AuthUrl: undefined
    },
    ApplicationInsights: {
      InstrumentationKey: undefined
    },
    YotiSettings: {
      AppId: undefined,
      ScenarioId: undefined
    }
  }
};

export function reducer(
  state: AppState = initialState,
  action: AppActions
): AppState {
  switch (action.type) {
    case AppActionTypes.LoadConfigSuccess: {
      return {
        ...state,
        appConfig: action.payload,
        kurec: true
      };
    }
  }

  return state;
}
