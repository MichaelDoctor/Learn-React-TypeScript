import React, { useState } from 'react';

interface Props {
    children: (
        count: number,
        setCount: React.Dispatch<React.SetStateAction<number>>
        ) => JSX.Element | null; // hover to find this type
}

const Counter: React.FC<Props> = ({ children }) => {
  // types added to props interface
  const [count, setCount] = useState<number>(0);
  // render prop = Share code between components
  return <div>{children(count, setCount)}</div>;
};

export default Counter;
