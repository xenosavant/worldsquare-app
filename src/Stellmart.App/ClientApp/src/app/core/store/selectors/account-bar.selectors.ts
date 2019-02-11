import {
  createFeatureSelector,
  MemoizedSelector,
  createSelector
} from '@ngrx/store';
import {
  AccountBarState,
  ACCOUNT_BAR_KEY
} from '../reducers/account-bar.reducer';

// Lookup the 'account bar' feature state managed by NgRx
const getAccountBarState: MemoizedSelector<
  object,
  AccountBarState
> = createFeatureSelector<AccountBarState>(ACCOUNT_BAR_KEY);

const getAccountBar: MemoizedSelector<object, string> = createSelector(
  getAccountBarState,
  (state: AccountBarState) => state.data.balance
);

const getAccountBarLoaded: MemoizedSelector<object, boolean> = createSelector(
  getAccountBarState,
  (state: AccountBarState) => state.loaded
);

const getAccountBarError: MemoizedSelector<object, boolean> = createSelector(
  getAccountBarState,
  (state: AccountBarState) => state.error
);

export const accountBarQuery = {
  getAccountBar,
  getAccountBarLoaded,
  getAccountBarError
};
