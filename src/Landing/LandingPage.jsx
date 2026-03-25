import '../index.css'
import Pages from './Pages'
import Profile from './Profile'
import Bubbles from './Bubbles';

function LandingPage(){
    return(
        <>
            <Bubbles></Bubbles>
            <div className='landinglayout w-dvw h-dvh bg-[linear-gradient(0deg,#182848,#2980b9)] flex flex-row overflow-hidden pl-[5vw] pr-[5vw]'>
                <Profile></Profile>
                <Pages></Pages>
            </div>
        </>
    );
}

export default LandingPage