
import { ThemeContext } from './ParentContext';
import * as React from 'react';

export const ChildA = () => {
    const theme = React.useContext(ThemeContext);
    
    console.log('ChildA renders');
    return(
        <div>
            Child component : {theme}
        </div>
    )
}

// export const MemoizedChild = React.memo(Child);