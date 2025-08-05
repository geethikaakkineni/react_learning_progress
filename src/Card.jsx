import mypic from './assets/passport_size.jpg'

function Card(){
    return (
        <div className="card">
            <img className='card_img' src={mypic} alt="my picture" ></img>
            <h2 className='card_title'>Geethika Akkineni</h2>
            <p className='card_text'>I am a student pursuing BTech in mrec</p>
        </div>
    );
}

export default Card