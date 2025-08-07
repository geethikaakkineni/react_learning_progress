import proptypes from 'prop-types';

function Loginpg(prop){
    // if(prop.isloggedin){
    //     return(
    //     <h2 id="welcomepg">Welcome to the page, {prop.username}</h2>
    // );
    // }
    // else{
    //     return <h2 id="askloginpg">Please login to continue</h2>
    // }

        // return (prop.isloggedin? <h2>Welcome to the page {prop.username}</h2> : <h2>Please login to continue</h2>);

    const welcomemsg=<h2 id="welcomepg">Welcome to the page {prop.username}</h2>
    const loginmsg=<h2 id="askloginpg">please login to continue</h2>

    return (prop.isloggedin ? welcomemsg : loginmsg);
}

Loginpg.proptypes={
    isloggedin : proptypes.bool,
    username : proptypes.string,
}
Loginpg.defaultProps={
    isloggedin : false,
    username : "Guest",
}

export default Loginpg