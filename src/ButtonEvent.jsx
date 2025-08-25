function ButtonEvent(){

    const handleClick = () =>
        console.log("ouch");

    const handleClick2=(name) => console.log(`${name} stop clicking me`)
    
    const handleClick3=(e) => console.log(e);

    const handleClick4=(e) => e.target.textContent="ouchh";
    
    return(
        <>
            {/* <button onClick={(e)=>handleClick3(e)}>click Me 🥰</button> */}
            <button onDoubleClick={(e) => handleClick4(e)}>click me</button>
        </>
    );
}

export default ButtonEvent 