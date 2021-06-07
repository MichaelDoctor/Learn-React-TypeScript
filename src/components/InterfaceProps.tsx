import React, { FC } from 'react'; // FC = functional component

// Must conform to protocol. Same as Swift interface
interface TestInterface {
    text?: string; // optional
}

const Test: FC<TestInterface> = ({ text }) => (
  <div>
    {text}
  </div>
);

export default Test;
