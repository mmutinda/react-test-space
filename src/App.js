import './App.css';
import { useState, useEffect, useRef } from 'react';
import useAsyncHook from './useLocalStorage';

function App() {

  const [name, setName] = useState('');
  const prevName = useRef();
  useAsyncHook(name);

  useEffect(()=> {
    //console.log('Component rendered');
    prevName.current = name;
  }, [name]) 

  return (
    <div> 
      <input value={name} onChange={e => setName(e.target.value)}/> 
      <div>My name is {name} used to be { prevName.current } </div>
    </div>
  );
}

export default App;
