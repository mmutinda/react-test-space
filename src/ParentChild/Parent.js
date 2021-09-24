import * as React from 'react';
import Child from './Child';

const initState = {};
// 
const Parent = () => {
    const [ count, setCount] = React.useState(initState);
    const [ name, setName] = React.useState('initName');
    console.log('Parent renders with val ~> ', count)
    // const updateState = {name: "mike"};
    // React.useEffect(() => {
    //     console.log('state now', count)
         
    // },[count])


    const onInputchange = (ev) => {
        setName(ev.target.value);
    }

    return(
        <div>
            {/* <button onClick={() => { setCount(p) }}> Count: { count?.name } </button> */}
            <button onClick={() => { setCount({name: "mike"}) }}> Count: { count?.name } </button>
            <div>
          <label>
            First Name :
            <input
              name="name"
              type="text"
              value={name}
              onChange={onInputchange}
            />
          </label>
        </div>
            <button onClick={() => { setName('mike') }}> Mike </button>
            <button onClick={() => { setName('miko') }}> Miko </button>
            <button onClick={() => { setName('wired') }}> Wired </button>
            <Child name={name}/>
        </div>
    )
}

Parent.whyDidYouRender = true

export default Parent;