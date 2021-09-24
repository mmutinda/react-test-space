
import * as React from 'react';
import LongAsync from '../components/LongAsync';

const Child = ({name}) => {
    
    console.log('Child renders with prop ', name);
    // console.log(name);
    const isMine = name === 'mike' || name === 'miko';
    
    return(
        <div>
            Child component  

            { isMine && (<LongAsync ageProp={name === 'mike' ? 30 : 15}/>) }
        </div>
    )
}


export default Child