import '../page.css'
import WaveHeader from '../WaveHeader';
import Navbar from '../Navbar';
import BubblesPage from '../BubblesPage';
import Footer from '../Footer';

import JuloIcon from '../assets/juloicon.jpg';
import SkorlifeIcon from '../assets/skorlifelogo.png';
import PurdueIcon from '../assets/purduelogo.png'

function ExperiencePage(){
    return(
        <>
        <BubblesPage></BubblesPage>
        <div className='w-full h-[100dvh] bg-[] overflow-auto font-varela relative z-1'>
            <Navbar></Navbar>
            <h1 className='h-[min(40dvh,280px)] text-[clamp(80px,10vw,100px)] text-white text-center bg-[#00bbfa] pt-[min(16dvh,112px)] shadow max-[701px]:text-[min(15vw,105px)] max-[701px]:h-[min(45vw,315px)] max-[701px]:pb-[20vw]' style={{textShadow: '0 0 4px #00749ab7, 0 0 4px #00749ab7, 0 0 4px #00749ab7'}}>Experience</h1>
            <WaveHeader></WaveHeader>

            <p className='text-center text-[5vw] mb-[min(2dvh,14px)]'>EDUCATION</p>
            <div className='flex flex-col w-[80%] ml-[10%] p-3 items-center bg-white border-[0.2vw] border-[#7cd3ef] rounded-3xl'>
                <div className='flex flex-row items-start gap-4 pt-[min(2dvh,11px)]'>
                    <div className='w-[8vw] h-[8vw] max-[701px]:w-[10vw] max-[701px]:h-[10vw] max-[701px]:pt-[0.5dvh]'>
                        <img src={PurdueIcon}></img>
                    </div>
                    <h2 className='text-[3vw] italic font-semmibold text-center pt-[0.5dvh] max-[701px]:text-[5vw] max-[701px]:pt-0'>Purdue University</h2>
                </div>
                <p className='text-[1.5vw] max-[701px]:text-[2vw]'>Computer and Information Technology Major & Communication Minor</p>
                <div className='flex flex-col items-center gap-[1dvh] w-[95%]  mt-[min(3dvh,21px)] pt-[1.5dvh] pb-[1.5dvh] rounded-2xl'>
                    <h2 className='text-[2.5vw] mb-[1dvh] text-black max-[701px]:text-[3vw]'> Coursework</h2>
                    <div className='flex flex-row justify-center text-[1.4vw]  gap-[4vw] text-black'>
                        <ul className='list-disc marker:text-[#1f5d72]'>
                            <li>CNIT 325: Object Oriented Application Development</li>
                            <li>CNIT 38101: Quality Engineering in IT</li>
                            <li>CNIT 315: Systems Programming</li>
                            <li>CNIT 355: Mobile Programming</li> 
                            <li>CNIT 270: Cybersecurity Fundamentals</li>                          
                        </ul>
                        <ul className='list-disc marker:text-[#1f5d72]'>
                            <li>CNIT 392: Enterprise Data Management</li>
                            <li>CNIT 372: Database Programming</li>
                            <li>CNIT 280: System Analysis and Design</li>
                            <li>COM 415: Discussing Technical Problems</li>
                            <li>CNIT 242: Systems Administration</li>
                        </ul> 
                    </div>
                    <p className='text-[1.4vw] text-black'>And Much More...</p>
                </div>
            </div>

            <p className='text-center mt-[min(12dvh,84px)] text-[5vw] mb-[2dvh]'>EXPERIENCE</p>
            <div className='flex flex-row w-[80%] ml-[10%] min-h-[min(80dvh,700px)] justify-center gap-[5vw] relative mb-[min(12dvh,84px)] max-[701px]:min-h-[100vw]'>
                <div className='w-[2vw] h-[2vw] bg-[#7cd3ef] absolute rounded-3xl left-[8.37vw] top-[22%]'></div>
                <div className='w-[2vw] h-[2vw] bg-[#7cd3ef] absolute rounded-3xl left-[8.37vw] top-[76%]'></div>


                <div className='bg-[#5896ab] self-stretch w-[0.2vw] rounded-3xl'></div>
                <div className='flex flex-col gap-[min(8dvh,56px)] w-[70%]'>
                    <div className='bg-white flex flex-col justify-center border-[0.2vw] border-[#6ec3df] rounded-3xl p-3 text-[1.2vw] h-[50%] max-[701px]:text-[2vw]'>
                        <div className='flex flex-row items-center gap-[0.5vw] mb-[0.5dvh]'>
                            <div className='w-[4vw] h-[4vw] max-[701px]:w-[5vw] max-[701px]:h-[5vw]'>
                                <img src={JuloIcon}></img>
                            </div>
                            <h2 className='text-[3vw] max-[701px]:text-[4vw]'>Julo</h2>
                        </div>
                        <p className='font-bold'>Backend Developer Intern</p>
                        <p>June 2025 - August 2025</p>
                        <h2 className='mt-[5dvh]'> Responsibilities:</h2>
                        <ul className='list-disc pl-[3vw]'>
                            <li className='mb-[1.2dvh]'>Developed dynamic eligibility checks (threshold validation, transaction method verification, etc) to conditionally display Julo Cares loan protection banners on E-Wallet and Withdraw Funds screens</li>
                            <li className='mb-[1.2dvh]'>Expanded the Julo Cares loan protection eligibility feature setting by expanding its associated parameters and accessories to enable more comprehensive eligibility checks</li>
                            <li className='mb-[1.2dvh]'>Integrated contextual Gadget Protection indicators on transaction result screens, leveraging database checks for loans covered under Julo Cares loan protection</li>
                            <li>Created several test units for added features to be tested through Jenkins</li>
                        </ul>
                    </div>

                    <div className='bg-white flex flex-col justify-center border-[0.2vw] border-[#6ec3df] rounded-3xl p-3 text-[1.2vw] h-[50%] max-[701px]:text-[2vw]'>
                        <div className='flex flex-row items-center gap-[0.5vw] mb-[0.5dvh]'>
                            <div className='w-[4vw] h-[4vw] max-[701px]:w-[5vw] max-[701px]:h-[5vw]'>
                                <img src={SkorlifeIcon}></img>
                            </div>
                            <h2 className='text-[3vw] max-[701px]:text-[4vw]'>Skorlife</h2>
                        </div>
                        <p className='font-bold'>Frontend Developer Intern</p>
                        <p>May 2024 - August 2024</p>
                        <h2 className='mt-[5dvh]'> Responsibilities:</h2>
                        <ul className='list-disc pl-[3vw]'>
                            <li className='mb-[1.2dvh]'>Integrated an API to convert gold bars to IDR (Indonesian Rupiah)</li>
                            <li className='mb-[1.2dvh]'>Implemented an in-app questionnaire, personalized to the user’s answer to previous in-app questions</li>
                            <li className='mb-[1.2dvh]'>Learnt to make the front-end of an android app through Android Studio using Dart programming language</li>
                            <li>Connected notifications to the section it is related to, allowing for users to instantly open the section of the app related to the pop-up once it’s been clicked on</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
        </>
    );
}

export default ExperiencePage