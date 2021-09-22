import * as React from 'react';
import { Child } from './Child';

const initState = {};
// 
const Parent = () => {
    const [ count, setCount] = React.useState(initState);
    console.log('Parent renders with val ~> ', count)
    // const updateState = {name: "mike"};
    // React.useEffect(() => {
    //     console.log('state now', count)
         
    // },[count])

    const p = React.useMemo(()=> {
        const updateState = {name: "mike"};
        return updateState;
    },[])
    return(
        <div>
            <button onClick={() => { setCount(p) }}> Count: { count?.name } </button>
            {/* <button onClick={() => { setCount(5)}}> Count: { count } </button> */}
            <Child count={count}/>
        </div>
    )
}

Parent.whyDidYouRender = true

export default Parent;