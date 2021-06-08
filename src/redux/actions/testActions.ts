import { Dispatch } from 'react';
import testActionType, { TYPE1 } from './testTypes';

const testAction = (value: string | null) => (
  dispatch: Dispatch<testActionType>,
):void => {
  dispatch({
    type: TYPE1,
    payload: value,
  });
};

export default testAction;
