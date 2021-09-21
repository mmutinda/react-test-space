import './App.css';
import { ParentContext } from './components/context/ParentContext';
// import { Parent } from './ParentChild/Parent';
// import UseState from './components/UseState';
// import { UseReducer } from './reducers/UseReducer';

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      <ParentContext/>
    </div>
  );
}

export default App;
