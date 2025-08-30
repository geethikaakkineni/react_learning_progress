import {useState} from "react";

function UpdateArraysInState(){
    
    const [menu,setMenu]=useState(["sandwich","burger","pizzaa"]);

    function HandleAdd(){
        const added=document.getElementById("addItem").value;
        document.getElementById("addItem").value="";

        setMenu(m=>[...m,added])
    }

    function HandleRemove(i){
        setMenu((m)=> m.filter((_ , index) => index!==i ));
        // setMenu(m.filter((_, index) => index !== i));        //DID NOT WORK, BUT SHUD NORMALLY WORK.

        //We are trying to remove the element/list item from the menu when we click on it.
        //the logic works by- if we click an item (with index=1, suppose) , then that item with index is filtered OUT and everything else is kept.
    }

    return(
        <>
            <h2>MENU</h2>
            <ul>
                {menu.map((m,i) => <li key={i} onClick={()=>HandleRemove(i)}>{m}</li>)}
            </ul>
            <input type="text" id="addItem" placeholder="add item"/>
            <button onClick={HandleAdd}>Add</button>
            <h2>click on the item to remove the item from the menu</h2>
        </>
    );
}
export default UpdateArraysInState;