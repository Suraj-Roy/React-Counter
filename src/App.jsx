import { useState } from 'react';
import './App.css';

function App() {
  //let counter = 0;

  let [counter, setCounter] = useState(0);
  const addOne = () => {
    setCounter(counter + 1);
  };

  const removeOne = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai Aur Code</h1>
      <h4>Counter Value: {counter}</h4>
      <button onClick={addOne}>Add {counter}</button>
      <button onClick={removeOne}>Remove {counter}</button>
    </>
  );
}

export default App;
