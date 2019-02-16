import {
  createFeatureSelector,
  MemoizedSelector,
  createSelector
} from '@ngrx/store';
import { AppState, APP_KEY } from '../reducers/app.reducer';
import { AppConfig } from '../../app.config';

// Lookup the 'account bar' feature state managed by NgRx
const getAccountBarState: MemoizedSelector<
  object,
  AppState
> = createFeatureSelector<AppState>(APP_KEY);

const getConfig: MemoizedSelector<object, AppConfig> = createSelector(
  getAccountBarState,
  (state: AppState) => state.appConfig
);

export const appQuery = {
  getConfig
};
