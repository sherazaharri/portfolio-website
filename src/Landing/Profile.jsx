import '../index.css'
import Icon from './Icon';

function Profile(){
    return(
        <div className='w-full h-full flex flex-col justify-center items-center text-[#ffffffe7] max-[701px]:h-[40%] max-[701px]:justify-end'>
            <Icon></Icon>
            <h1 className='nameText mt-[5dvh] text-[5vw] font-bold font-varela'>Sheraza Harri</h1>
            <h1 className='mt-[0] text-[2vw]  font-bold font-varela max-[501px]:mt-0'>Frontend Software Developer</h1>
            <div className='locationDiv mt-[3dvh] flex flex-row justify-center items-center gap-[0.5vw]'>
                <div className='w-[3vw] h-[3vw]'>
                    <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#ffffffe7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffffe7" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> </g></svg>
                </div>
                <h1 className='locationText text-[2vw] pt-[min(0.5dvh,3.4px)] font-varela '>West Lafayette, Indiana</h1>
            </div>
        </div>
    )
}

export default Profile;