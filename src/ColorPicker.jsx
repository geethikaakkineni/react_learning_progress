import {useState} from 'react';
import './ColorPicker.css'

function ColorPicker(){

    const [color,setColor]=useState("#000000");

    const colorHandler=(e)=>{
        setColor(e.target.value);
    }

    return (
        <>
            <div className='container'>
                <h1>COLOR PICKER</h1>
                <div className='display' style={{backgroundColor:color}}>
                    <p>selected color: {color}</p> 
                </div>
                <label>select a color:</label>              
                <input type='color' value={color} onChange={colorHandler}/>

            </div>
        </>
    );
}
export default ColorPicker;