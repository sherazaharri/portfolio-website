import '../index.css'
import Icon from './Icon';

function Profile(){
    return(
        <div className='w-full h-full flex flex-col justify-center items-center text-[#ffffffe7] max-[701px]:h-[40%] max-[701px]:justify-end'>
            <Icon></Icon>
            <h1 className='mt-[5vh] text-[5vw] font-bold font-varela'>Sheraza Harri</h1>
            <h1 className='mt-[-1vh] text-[2vw]  font-bold font-varela max-[501px]:mt-0'>Frontend Software Developer</h1>
            <h1 className='mt-[3vh] text-[2vw] font-varela max-[501px]:mt-[2vw]'>West Lafayette, Indiana</h1>
        </div>
    )
}

export default Profile;