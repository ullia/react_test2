import React from 'react';
import './App.css';
import Textarea from './components/Textarea';

function App() {
  return (
    <div className="App">
      <Textarea />
      <Textarea status="readonly" />
      <Textarea status="disabled" />
    </div>
  );
}

export default App;
