import './App.css';
import { useState } from 'react';

function App() {

  const [state, setState] = useState({ name: 'mike', age: 30});
  function increment() {
    setState((prevState) =>  { return { ...prevState, age: prevState.age + 1}})
  }

  function decrement() {
    setState(prevState => prevState.age + 1)
  }

  return (
    <div> 
    <h1>Hello, {state.name} has age of {state.age}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
