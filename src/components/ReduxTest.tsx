import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import testAction from '../redux/actions/testActions';

const ReduxTest: React.FC = () => {
  const dispatch = useDispatch();
  const testValue = useSelector((state: RootState) => state.test.value);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch(testAction('I pressed the button'));
  };
  return (
    <div>
      <h2>Press me</h2>
      <button type="button" onClick={handleClick}>Redux</button>
      <br />
      {testValue || 'Empty State'}
    </div>
  );
};

export default ReduxTest;
