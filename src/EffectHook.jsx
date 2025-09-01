import { useState , useEffect } from "react";

function EffectHook(){
    
// // THE COMMENTED CODE ALL ABOUT UNDERSTANDING THE USE EFFECT HOOK 
// // IT LOGS TO THE CONSOLE AND ALSO CHNAGES THE NAME OF THE PAGE

//     const [count,setCount]=useState(0);
//     const [color,setColor]=useState("green");
    
//     useEffect(()=>{
//         console.log("used effect");
//         document.title= `${color}.${count}`;
//     },)

// // IN THE ABOVE LINE OF CODE, I.E THE USEEFFECT CLOSING,WE CAN ALSO ADD
// // GENERAL OR SEPECIFIC DEPENDENCIES. GENERAL -> []  SPECIFIC -> [COLOR/COUNT] ACCORDING TO 
// // OUR REQUIREMENT.

//     function addCount(){
//         setCount((c)=>c+1);
//     }
//     function subCount(){
//         setCount((c)=>c-1);
//     }
//     function changeColor(){
//         setColor(c=> c==="green"? "red" : "green");
//     }

//     return(
//         <>
//             <p style={{color:color}}>Count:{count} Color:{color}</p>
//             <button onClick={addCount}>Add</button>
//             <button onClick={subCount}>Sub</button> <br/>
//             <button onClick={changeColor}>Change Color</button>
//         </>
//     );

    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("event listener worked!!");

        return()=>{
            console.log("this part of code is executed when component is unmounted-clean up is performed");
        }
    },[]);


    // SECOND EFFECT HOOK FOR THE SAME WIDTH AND HEIGHT COMPONENTS/STATES.
    useEffect(()=>{
        document.title=`size ${width} x ${height}`;
    },[width,height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
            <p>Window width : {width}px</p>
            <p>Window height : {height}px</p>
        </>
    );
}

export default EffectHook;
