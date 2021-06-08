import testActionType, { TYPE1 } from '../actions/testTypes';

interface State {
    value: string | null;
}

const initialState: State = {
  value: null,
};

const testReducer = (
  state: State = initialState, action: testActionType,
): State => {
  switch (action.type) {
    case TYPE1:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export default testReducer;
