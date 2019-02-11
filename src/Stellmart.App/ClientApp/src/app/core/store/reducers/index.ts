import { ActionReducerMap } from '@ngrx/store';
import * as fromAccountBar from './account-bar.reducer';

export interface CoreState {
  accountBar: fromAccountBar.AccountBarState;
}

export const reducers: ActionReducerMap<CoreState> = {
  accountBar: fromAccountBar.reducer
};
