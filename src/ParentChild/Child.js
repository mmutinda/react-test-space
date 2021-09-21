
import * as React from 'react';

export const Child = ({ person }) => {
    
    console.log('Child renders');
    return(
        <div>
            Child component { person.name }
        </div>
    )
}

export const MemoizedChild = React.memo(Child);