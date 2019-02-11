import { AccountActions, AccountActionTypes } from '../actions/account.actions';

export interface State {}

export const initialState: State = {};

export function reducer(state = initialState, action: AccountActions): State {
  switch (action.type) {
    case AccountActionTypes.LoadAccount:
      return state;

    default:
      return state;
  }
}
