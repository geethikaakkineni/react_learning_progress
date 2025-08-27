import { useState } from "react";

function UpdaterAndObjects(){
    
    const [details,setDetails]=useState({id:243 , 
                                         age:22,
                                         sex:"female"
                                        });
    
    function handleId(e){
        setDetails(d=>({...d, id:e.target.value}));     //better as we are using the updater function
    }
    function handleAge(e){
        setDetails(d=>({...d, age:e.target.value}));
    }
    function handleSex(e){
        setDetails(d=>({...d,sex:e.target.value}));
    }

    return(
        <>
            <div>ID :  <input type="text" value={details.id} onChange={handleId}/></div>
            <div> AGE :  <input type="number" value={details.age} onChange={handleAge}/></div>
            <div> SEX :  <input type="radio" name="sex" value="female" checked={details.sex==="female"} onChange={handleSex}/>Female
                         <input type="radio" name="sex" value="male" checked={details.sex==="male"} onChange={handleSex}/>Male </div>
            <br/><br/>
            <h3>YOUR DETAILS :</h3>
            <p>  id : {details.id}  </p>
            <p>  age : {details.age}  </p>
            <p>  sex : {details.sex}  </p>
        </>
    );
}
export default UpdaterAndObjects;



// import {useState} from "react";

//     const [menu,setMenu]=useState(["chicken","mutton","prawn"]);

//     function handleAdd(e){
//         const added=e.target.value;
//         setMenu(m=>([...m , added]))
//     }

// function UpdaterAndObjects(){

//     return(
//         <>
//         <h2>MENU</h2>
//         <ul>
//             {menu.map((_,index)=> <li>{menu}</li>)}
//         </ul>
//         </>
//     );
// }

// export default UpdaterAndObjects;