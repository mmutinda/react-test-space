import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [state, setState] = useState({ name: 'mike', age: 30});
  const [count, setCount] = useState(1);
  const [items, setItems] = useState([]);
  function increment() {
    setState((prevState) =>  { return { ...prevState, age: prevState.age + 1}})
  }


  function decrement() {
    setCount(count + 1)
    setState((prevState) =>  { return { ...prevState, name: `name ${count}`}})
  }

  useEffect(()=> {
    console.log('fetching')
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => setItems(json))
    return ()=> {
      console.log('clean up')
    }
  },[state.age]);

  return (
    <div> 
    <h1>Hello, {state.name} has age of {state.age}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>decrement</button>

    { items.map( item => {
      return (<pre> {JSON.stringify(item)}</pre>)
    })}
    </div>
  );
}

export default App;
