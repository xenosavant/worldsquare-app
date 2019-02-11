import {
  AccountBarActions,
  AccountBarActionTypes
} from '../actions/account-bar.actions';

import { UserBalanceResponse } from '../../models/user-balance-response.model';

export const ACCOUNT_BAR_KEY: string = 'account_bar';

export interface AccountBarState {
  data: UserBalanceResponse | undefined;
  loaded: boolean;
  error?: any;
}

export const initialState: AccountBarState = {
  data: {
    balance: undefined
  },
  loaded: false
};

export function reducer(
  state: AccountBarState = initialState,
  action: AccountBarActions
): AccountBarState {
  switch (action.type) {
    case AccountBarActionTypes.LoadAccountBar: {
      return {
        ...state,
        data: {
          balance: undefined
        },
        loaded: false
      };
    }

    case AccountBarActionTypes.LoadAccountBarSuccess: {
      return {
        ...state,
        loaded: true
      };
    }

    case AccountBarActionTypes.LoadAccountBarError: {
      return {
        ...state,
        loaded: false
      };
    }
  }

  return state;
}
