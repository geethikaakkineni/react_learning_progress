import React,{createContext, useState} from "react";
import './Component.css';
import ComponentB from "./ComponentB";

export const userContext = createContext();

function ComponentA(){

    const [user,setUser]= useState("abcd");
    const [age,setAge]=useState("20");

    return(
    <div className="box">
        <h1>Component A</h1>
        <h2>{`hello ${age}`}</h2>
        <userContext.Provider value={age}>   {/*the value of age (age state) is passed to the context */}
            <ComponentB user={user}/>          {/* the value of user (user state) is passed via props and can be accessed by {props.user}*/}
        </userContext.Provider>   
    </div>
    );
}
export default ComponentA;