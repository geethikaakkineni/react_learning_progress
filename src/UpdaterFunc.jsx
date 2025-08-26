import { useState } from "react";

function UpdaterFunc(){
    const [count,setCount]=useState(0);

    function decrement(){
        // setCount(count-1);
        // setCount(count-1);
        // setCount(count-1);       //DOES NOT WORK. The value increases only by 1 even when we increased 3 times
        setCount(c=>c-1);
        setCount(c=>c-1);           //but thisss - updater function works the way we desire. These 2llines will enable our decr button to decrease the display value by 2
    };
    function reset(){
        // setCount(0);
        setCount(c=>0);
    };
    function increment(){
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);       //DOES NOT WORK. The value decreases only by one even when we decrease thrice
        setCount(c=>c+1);
    
    };

    return(
        <>
            <div>
                <h1>{count}</h1>
                <button id="d" onClick={decrement}>Decrease</button>
                <button id="r" onClick={reset}>Reset</button>
                <button id="i" onClick={increment}>Increment</button>
            </div>
        </>

    );
}

export default UpdaterFunc;