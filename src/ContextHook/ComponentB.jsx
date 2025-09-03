import './Component.css';
import ComponentC from "./ComponentC";

import {useContext} from 'react';
import { userContext } from './ComponentA';

function ComponentB(props){

    const value=useContext(userContext);
 
    return(
    <div className="box">
        <h1>Component B</h1>
        <h2>{`hwllo again ${props.user} - i am a prop`}</h2>
        <h2>{`hwllo again ${value} - i am a context`}</h2>
        <ComponentC />
    </div>
    );
}
export default ComponentB;