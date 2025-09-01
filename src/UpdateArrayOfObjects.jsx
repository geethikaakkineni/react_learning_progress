import {useState} from 'react';

function UpdateArrayOfObjects(){

    const [details,setDetails]=useState([]);
    const [id,setID]=useState("");
    const [joinYear,setJoinYear]=useState(new Date().getFullYear());
    const [position,setPosition]=useState("");

    function handleAdd(){
        const newEmp= {empID:id , 
                       EmployeeJoining: joinYear , 
                       EmployeePosition: position};

        setDetails(d=>[...d,newEmp])

        setID("");
        setJoinYear(new Date().getFullYear());
        setPosition("");
    }
    function handleRemove(index){
        setDetails(c=>c.filter((_,i)=>i!==index));
    }
    function handleId(event){
        setID(event.target.value);
    }
    function handleYear(event){
        setJoinYear(event.target.value);
    }
    function handlePosition(event){
        setPosition(event.target.value);
    }
    
    return(
        <>
            <h2>Employee List</h2>
            <ul>
                {details.map((details,index) =>
                <li key={index} onClick={()=>handleRemove(index)}>
                    {details.empID} {details.EmployeeJoining} {details.EmployeePosition}
                    </li>)}
            </ul>
                <input type="text" placeholder='enter employee Id' value={id} onChange={handleId}></input><br/><br/>
                <input type="number" placeholder='enter year of joining' value={joinYear} onChange={handleYear}></input><br/><br/>
                <input type="text" placeholder='enter current postion' value={position} onChange={handlePosition}></input><br/><br/>
                <button onClick={handleAdd}>Add Employee</button>
        </>
    );
}
export default UpdateArrayOfObjects;