import React, { FC } from 'react';
import './App.css';
import Test from './components/InterfaceProps';

const App: FC = () => (
  <div className="App">
    Test
    <Test text="Text input" />
  </div>
);

export default App;
