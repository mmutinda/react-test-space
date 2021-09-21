import * as React from 'react';
import { ChildA } from './ChildA';
export const ThemeContext = React.createContext();


export const ParentContext = () => {
    const [ count, setCount] = React.useState('light');
    return(
        <ThemeContext.Provider value={count}>
            <div>
                <button onClick={() => { setCount('dark')}}>Change Theme to Dark</button>
                <button onClick={() => { setCount('light')}}>Change Theme to Light</button>
                <ChildA/>
            </div>
        </ThemeContext.Provider>
    )
}