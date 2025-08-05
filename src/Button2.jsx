
function Button2(){
    const styles={
        backgroundColor: "rgba(210, 236, 139, 0.93)",
        border:"solid 2px black",
        borderRadius: "5px",
        color: "black",
        padding: "6px",
        marginLeft: "130px",
        marginTop: "15px",
        display: "grid",
        cursor: "pointer",
        maxWidth: "80px",
    }
    

    return(
        <buttons>
            <button2 style={styles}>
                click Me 2!
            </button2>


            <button3 style={{backgroundColor: "rgba(226, 149, 81, 0.93)",
            border:"solid 2px black",
            borderRadius: "5px",
            color: "black",
            padding: "6px",
            marginLeft: "130px",
            marginTop: "15px",
            display: "grid",
            cursor: "pointer",
            maxWidth: "80px"}}>click me 3!</button3>
        </buttons>
    );
}

export default Button2