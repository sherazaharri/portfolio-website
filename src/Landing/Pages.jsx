import '../index.css'
import { Link } from 'react-router-dom';
import { IoMdPerson } from "react-icons/io";

function Pages(){
    return(
        <div className='w-full h-full flex flex-row justify-center items-center pr-[5vw] max-[701px]:pr-0 max-[701px]:h-[50%]'>
            <nav className='landingbuttonlayout w-full flex flex-col gap-[5vh] text-white max-[701px]:gap-[3dvh]'>
                <Link to='/about'>
                    <div className='button1 relative'>
                        <button className='PageButtonAbout font-varela relative'><p style={{filter: 'drop-shadow(0 0 0.5px #00749ab7) drop-shadow(0 0 0.5px #00749ab7)'}}>About</p></button>
                        <div className='absolute Ripple'></div>
                        <div className='absolute Ripple'></div>
                        <div className='absolute Ripple'></div>
                        <div className='absolute Ripple'></div>
                    </div>
                </Link>

                <Link to='/project'>
                    <div className='button2 relative'>
                        <button className='PageButtonProject font-varela relative'><p style={{filter: 'drop-shadow(0 0 0.5px #00749ab7) drop-shadow(0 0 0.5px #00749ab7)'}}>Projects</p></button>
                        <div className='absolute Ripple'></div>
                        <div className='absolute Ripple'></div>
                        <div className='absolute Ripple'></div>
                        <div className='absolute Ripple'></div>
                    </div>
                </Link>

                <Link to='/experience'>
                    <div className='button3 relative'>
                        <button className='PageButtonExperience font-varela relative'><p style={{filter: 'drop-shadow(0 0 0.5px #00749ab7) drop-shadow(0 0 0.5px #00749ab7)'}}>Experience</p></button>
                        <div className='absolute Ripple'></div>
                        <div className='absolute Ripple'></div>
                        <div className='absolute Ripple'></div>
                        <div className='absolute Ripple'></div>
                    </div>
                </Link>
            </nav>
        </div>
    );
}

export default Pages