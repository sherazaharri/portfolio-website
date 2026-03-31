import { Link } from 'react-router-dom';
import { useRef, useState, useEffect, use } from 'react';
import './page.css';
import {ViewTransition} from 'react';

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
            <nav className="desknav w-[80vw] h-[min(10dvh,78px)] fixed top-[min(3dvh,21px)] left-[10vw] flex flex-row justify-center items-center font-varela bg-[#ffffff] text-black border-2 rounded-md z-10">
                <div className='w-[50%] flex flex-row justify-start items-center gap-[1.5vw] pl-[2vw]'>
                    <Link to='/'>
                        <h1 className='text-[3vw] font-varelastraight'>SHERAZA</h1>
                    </Link>
                </div>
                <div className="w-[50%] flex flex-row justify-end gap-[2vw] pr-[2vw]">
                    <Link to='/'>
                        <p className='text-[1.5vw]'>Home</p>
                    </Link>
                    <Link to='/about'>
                        <p className='text-[1.5vw]'>About</p>
                    </Link>
                    <Link to='/project'>
                        <p className='text-[1.5vw]'>Projects</p>
                    </Link>
                    <Link to='/experience'>
                        <p className='text-[1.5vw]'>Experience</p>
                    </Link>
                </div>
            </nav>

            <nav className="mobilenav w-screen fixed hidden flex-col z-10">
                <div className='w-full h-[min(10vh,78px)] flex flex-row justify-center items-center font-varela bg-[#ffffff] text-black border-b-2 border-black-100'>
                    <div className='w-[50%] flex flex-row justify-start items-center pl-[5vw]'>
                        <h1 className='text-[4.5vw] font-varelastraight'>SHERAZA</h1>
                    </div>
                    <div className="w-[50%] flex flex-row justify-end items-center gap-[1.5vw] pr-[5vw]">
                        <h1 className='text-[3.5vw] font-varela'>MENU</h1>
                        <div className='w-[4vw] h-[4vw]' onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? (
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"></path> </g></svg>
                            ) : (
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            )}
                        </div>
                    </div>
                </div>
                <nav className={`w-screen h-[70vw] fixed top-[min(9.4dvh,76.234px)] ${menuOpen ? 'flex' : 'hidden'} flex flex-col justify-center items-center gap-[2vh] font-varela bg-[linear-gradient(to_bottom,#79d7fd,#25b8fc)] text-black border-b-[0.5dvh] border-[#76d9fa] z-10`}>
                    <Link to='/' onClick={() => setMenuOpen(!menuOpen)}>
                        <p className='text-[7vw] text-[#ffffff]' style={{textShadow: '0 0 4px #00749ab7, 0 0 4px #00749ab7, 0 0 4px #00749ab7'}}>HOME</p>
                    </Link>
                    <Link to='/about' onClick={() => setMenuOpen(!menuOpen)}>
                        <p className='text-[7vw] text-[#ffffff]' style={{textShadow: '0 0 4px #00749ab7, 0 0 4px #00749ab7, 0 0 4px #00749ab7'}}>ABOUT</p>
                    </Link>
                    <Link to='/project' onClick={() => setMenuOpen(!menuOpen)}>
                        <p className='text-[7vw] text-[#ffffff]' style={{textShadow: '0 0 4px #00749ab7, 0 0 4px #00749ab7, 0 0 4px #00749ab7'}}>PROJECTS</p>
                    </Link>
                    <Link to='/experience' onClick={() => setMenuOpen(!menuOpen)}>
                        <p className='text-[7vw] text-[#ffffff]' style={{textShadow: '0 0 4px #00749ab7, 0 0 4px #00749ab7, 0 0 4px #00749ab7'}}>EXPERIENCE</p>
                    </Link>
                </nav>
            </nav> 
        </>
    )
}

export default Navbar;