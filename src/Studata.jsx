import mypic from './assets/image.png'

function Studata(data){
    return(
        <div className="card2">   
            <img className='card_img' src={mypic} alt="my picture" ></img>
            <h2 className='card_title'>name: {data.name}</h2>
            <p className='card_text'>profession: {data.profession}</p>
            <p className='card_text'>age: {data.age>30? "old":"young"}</p>
        </div>
    );
}

export default Studata