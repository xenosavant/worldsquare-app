import {
  createFeatureSelector,
  MemoizedSelector,
  createSelector
} from '@ngrx/store';
import { AppState, APP_KEY } from '../reducers/app.reducer';
import { AppConfig } from '../../app.config';

const getAppState: MemoizedSelector<object, AppState> = createFeatureSelector<
  AppState
>(APP_KEY);

const getConfig: MemoizedSelector<object, AppConfig> = createSelector(
  getAppState,
  (state: AppState) => state.appConfig
);

export const appQuery = {
  getConfig
};
