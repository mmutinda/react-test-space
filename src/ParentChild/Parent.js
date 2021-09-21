import * as React from 'react';
import { MemoizedChild } from './Child';

const initState = 0;
export const Parent = () => {
    const [ count, setCount] = React.useState(initState);
    const person = {
        name: 'Mike'
    }
    return(
        <div>
            <button onClick={() => { setCount(c => c+1)}}> Count: { count } </button>
            <button onClick={() => { setCount(5)}}> Count: { count } </button>
            <MemoizedChild person={person}/>
        </div>
    )
}