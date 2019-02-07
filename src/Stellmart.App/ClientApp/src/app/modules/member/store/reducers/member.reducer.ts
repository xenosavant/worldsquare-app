
import { MemberActions, MemberActionTypes } from '../actions/member.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: MemberActions): State {
  switch (action.type) {

    case MemberActionTypes.LoadMembers:
      return state;

    default:
      return state;
  }
}
