import React, { useState } from 'react';
import './App.css';
import Test from './components/InterfaceProps';
import Test2, { CustomColour } from './components/EnumProps';
import ReducerTest from './components/ReducerTest';
import ReduxTest from './components/ReduxTest';
import TestSelect from './components/TestSelect';

const App: React.FC = () => {
  const [text, setText] = useState<string>('Text input');
  return (
    <div className="App">
      Test
      <Test
        text={text}
        handleChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Test2 colour={CustomColour.Green} />
      <br />
      <ReducerTest />
      <ReduxTest />
      <TestSelect />
    </div>
  );
};

export default App;
