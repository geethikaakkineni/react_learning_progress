function Footer(){
    return(
        <footer>
            <hr/>
            <p>&copy; this is a copyrighted page
                yeah jst like that 
                <br/>
                {new Date().getDate()}.{new Date().getMonth()}.{new Date().getFullYear()}
                <br/>
                this date is written using js!
                how cool is thattt
            </p>
            <hr/>
        </footer>
    );
}

export default Footer;