import * as React from 'react';

const initialState = 0;

const reducerFxn = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state -1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export const UseReducer = () => {
    const [ count, dispatch] = React.useReducer(reducerFxn, initialState);
    console.log('useReducer rendering')
    return(
        <div style={{marginTop: 70}}>
            <div> count: {count} </div>
            <button onClick={()=> dispatch('increment')}> Increment </button>
            <button onClick={()=> dispatch('decrement')}> Decrement </button>
            <button onClick={()=> dispatch('reset')}> Reset </button>
         </div>
    )
}