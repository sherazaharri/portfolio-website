import '../index.css'
import photo from '../assets/photo.jpg'

function Icon(){
    return(
        <>
        <div className='w-full flex justify-center items-center relative'>
            <div className="bubble"></div>
            <img src={photo} className='iconPhoto absolute top-[2%] w-[20vw] h-[20vw] rounded-[120px]'></img>
        </div>
        </>
    );
}

export default Icon;