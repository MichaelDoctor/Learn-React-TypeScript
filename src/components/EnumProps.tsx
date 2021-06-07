import React, { FC } from 'react'; // FC = functional component
import Counter from './Counter';

export enum CustomColour {
    Red = 'red',
    Blue = 'blue',
    Green = 'green'
}

interface TestInterface {
  text?: string, // optional
  colour: CustomColour,
}

const Test2: FC<TestInterface> = ({ text, colour }) => (
  <div>
    <h1>Enum Component</h1>
    {text || 'Empty'}
    {' '}
    My colour is
    {' '}
    {colour}
    {' '}
    <br />
    Counter component from Counter.tsx
    <Counter>
      {(count, setCount) => (
        <div>
          <h2>Counter Component</h2>
          {count}
          <br />
          <button type="button" onClick={() => setCount(count + 1)}>+</button>
        </div>
      )}
    </Counter>
  </div>
);

export default Test2;
