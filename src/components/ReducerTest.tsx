import React, { useReducer, useState } from 'react';

type Action = { type: 'add'; text: string } | { type: 'delete'; id: number}

interface Todo {
    text: string;
    completed: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'add':
      return [...state, { text: action.text, completed: false }];
    case 'delete':
      return state.filter((_, i) => action.id !== i);
    default:
      return state;
  }
};

const ReducerTest: React.FC = () => {
  const [counter, setCounter] = useState<number>(1);
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <div>
      <h1>Use Reducer Component</h1>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'add', text: `Added ${counter}` });
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'delete', id: 0 });
        }}
      >
        -
      </button>
      <br />
      {JSON.stringify(todos)}
    </div>
  );
};

export default ReducerTest;
