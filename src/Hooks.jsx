import React,{useState} from "react";

function Hooks(){
    const [count,setCount]=useState(0);

    const incr=()=>{
        setCount(count+1);
    }
    const decr=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
    
    return(
        <div>
            <p id="counter">{count}</p>
            <button onClick={decr}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={incr}>Increment</button>
        </div>
    );
}

export default Hooks