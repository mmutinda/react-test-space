import * as React from 'react';

const UseState = () => {
    const [count, setCount] = React.useState(0);
    console.log('Use state render..')
    return(
        <div>
            <button onClick={()=> { setCount(c => c+1)}}> { count }</button>
            <button onClick={()=> setCount(0)}> { count }</button>
            <button onClick={()=> setCount(3)}> { count }</button>
        </div>
    )

}

export default UseState;

