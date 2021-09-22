
import * as React from 'react';

export const Child = ({count}) => {
    
    console.log('Child renders');
    console.log(count);
    
    return(
        <div>
            Child component  
        </div>
    )
}
