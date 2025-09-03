import './Component.css';
import {useContext} from 'react';
import { userContext } from './ComponentA';

function ComponentD(){

    const value=useContext(userContext);

    return(
    <div className="box">
        <h1>Component D</h1>
        <h3>{`bye ${value}`}</h3>
    </div>
    );
}
export default ComponentD;