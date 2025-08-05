import mypic from './assets/image.png'

function Card(data){
    return (
        <div>
            <div className="card1">
                <img className='card_img' src={mypic} alt="my picture" ></img>
                <h2 className='card_title'>Geethika Akkineni</h2>
                <p className='card_text'>I am a student pursuing BTech in mrec</p>
            </div> 

        </div>
    );
}

export default Card