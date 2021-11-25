import { useState } from "react";

// hook -> gancho

export function Counter(){
    
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter( counter + 1 );
    }
    
    return(
        <>
            <h2>{counter}</h2>
            <button 
                type="button" 
                onClick={increment}>
                Increment
            </button>
        </>
    )
}