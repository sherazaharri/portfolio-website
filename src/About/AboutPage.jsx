import '../page.css'
import Navbar from '../Navbar';
import WaveHeader from '../WaveHeader';
import BubblesPage from '../bubblesPage';
import Footer from '../Footer';

import pfgcimage from '../assets/pfgc.jpg'
import permiasimage from '../assets/permiasimg.png'

function AboutPage(){
    return(
        <>
        <BubblesPage></BubblesPage>
        <div className='w-full h-[100dvh] bg-[] overflow-auto font-varela relative z-1'>
            <Navbar></Navbar>
            <h1 className='h-[min(40dvh,280px)] text-[clamp(80px,10vw,100px)] text-white text-center bg-[#00bbfa] pt-[min(16dvh,112px)] shadow' style={{textShadow: '0 0 4px #00749ab7, 0 0 4px #00749ab7, 0 0 4px #00749ab7'}}>About</h1>
            <WaveHeader></WaveHeader>


            <div className='flex flex-row w-full justify-center'>
                <div className='flex flex-row w-full justify-center gap-[5%]'>
                    <div className='w-[20vw] h-[20vw] max-[701px]:w-[25vw] max-[701px]:h-[25vw] bg-black'></div>
                    <div className='flex flex-col w-[55%] justify-center text-[#7b7b7b]'>
                        <p className='text-[1.5vw] max-[701px]:text-[2vw]'>My Name is</p>
                        <h1 className='text-[4vw] max-[701px]:text-[5.3vw] text-black'>Sheraza Harri</h1>
                        <h2 className='text-[2vw] max-[701px]:text-[2.3vw]'>I'm a <span className='text-black'>Computer and Information Technology major</span>, specializing in <span className='text-black'>Frontend Software Development</span> along with <span className='text-black'>Data Management and Visualization</span></h2>
                    </div>
                </div>
            </div>


            <p className='text-center mt-[min(15dvh,105px)] text-[5vw] mb-[min(2dvh,14px)]'>Skills</p>
            <div className='flex flex-col w-full justify-center gap-[min(3dvh,21px)]'>
                <div className='flex flex-row justify-center gap-[4vw]'>
                    <div className='skillscard w-[12vw] h-[14vw]  bg-[linear-gradient(to_bottom,#79d7fd,#25b8fc,#1a8abf)] flex flex-col justify-center items-center gap-[20%] rounded-2xl'>
                        <div className='w-[50%] h-[30%]' style={{filter: 'drop-shadow(0 0 0.5px black) drop-shadow(0 0 0.5px black)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#ffffff"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>
                        </div>
                        <p className='text-[2vw] text-[#ffffff] max-[701px]:text-[2.5vw]' style={{textShadow: '0 0 2px black, 0 0 2px #ababab'}}>React</p>
                    </div>
                    <div className='skillscard w-[12vw] h-[14vw]  bg-[linear-gradient(to_bottom,#79d7fd,#25b8fc,#1a8abf)] flex flex-col justify-center items-center gap-[20%] rounded-2xl'>
                        <div className='w-[50%] h-[30%]' style={{filter: 'drop-shadow(0 0 0.5px black) drop-shadow(0 0 0.5px black)'}}>
                            <svg viewBox="0 0 128 128"><path fill="#ffffff" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"></path></svg>
                        </div>
                        <p className='text-[2vw] text-[#ffffff] max-[701px]:text-[2.5vw]' style={{textShadow: '0 0 2px black, 0 0 2px #ababab'}}>HTML 5</p>
                    </div>
                    <div className='skillscard w-[12vw] h-[14vw]  bg-[linear-gradient(to_bottom,#79d7fd,#25b8fc,#1a8abf)] flex flex-col justify-center items-center gap-[20%] rounded-2xl'>
                        <div className='w-[50%] h-[30%]' style={{filter: 'drop-shadow(0 0 0.5px black) drop-shadow(0 0 0.5px black)'}}>
                            <svg viewBox="0 0 128 128"><path fill="#ffffff" d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"></path></svg>    
                        </div>
                        <p className='text-[2vw] text-[#ffffff] max-[701px]:text-[2.5vw]' style={{textShadow: '0 0 2px black, 0 0 2px #ababab'}}>CSS</p>
                    </div>
                    <div className='skillscard w-[12vw] h-[14vw]  bg-[linear-gradient(to_bottom,#79d7fd,#25b8fc,#1a8abf)] flex flex-col justify-center items-center gap-[20%] rounded-2xl'>
                        <div className='w-[50%] h-[30%]' style={{filter: 'drop-shadow(0 0 0.5px black) drop-shadow(0 0 0.5px black)'}}>
                            <svg fill="#ffffff" viewBox="0 0 128 128"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"></path></svg>
                        </div>
                        <p className='text-[2vw] text-[#ffffff] max-[701px]:text-[2.5vw]' style={{textShadow: '0 0 2px black, 0 0 2px #ababab'}}>Tailwind</p>
                    </div>
                </div>

                <div className='flex flex-row justify-center gap-[4vw]'>
                    <div className='skillscard w-[12vw] h-[14vw]  bg-[linear-gradient(to_bottom,#79d7fd,#25b8fc,#1a8abf)] flex flex-col justify-center items-center gap-[20%] rounded-2xl'>
                        <div className='w-[50%] h-[30%]' style={{filter: 'drop-shadow(0 0 0.5px black) drop-shadow(0 0 0.5px black)'}}>
                            <svg viewBox="0 0 128 128"><path fill="#ffffff" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path></svg>                  
                        </div>
                        <p className='text-[2vw] text-[#ffffff] max-[701px]:text-[2.5vw]' style={{textShadow: '0 0 2px black, 0 0 2px #ababab'}}>JavaScript</p>
                    </div>
                    <div className='skillscard w-[12vw] h-[14vw]  bg-[linear-gradient(to_bottom,#79d7fd,#25b8fc,#1a8abf)] flex flex-col justify-center items-center gap-[20%] rounded-2xl'>
                        <div className='w-[50%] h-[30%]' style={{filter: 'drop-shadow(0 0 0.5px black) drop-shadow(0 0 0.5px black)'}}>
                            <svg viewBox="0 0 128 128"><path fill="#ffffff" d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zm33.189-10.46c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zm11.319-60.575c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zm9.998 81.144s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644C17.455 81.134 61.958 83.958 85 77.896zm5.609 15.145c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559C89.459 14.563 76.492 1.587 76.492 1.587c5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zm27.274 51.748c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z"></path></svg>
                        </div>
                        <p className='text-[2vw] text-[#ffffff] max-[701px]:text-[2.5vw]' style={{textShadow: '0 0 2px black, 0 0 2px #ababab'}}>Java</p>
                    </div>
                    <div className='skillscard w-[12vw] h-[14vw]  bg-[linear-gradient(to_bottom,#79d7fd,#25b8fc,#1a8abf)] flex flex-col justify-center items-center gap-[20%] rounded-2xl'>
                        <div className='w-[50%] h-[30%]' style={{filter: 'drop-shadow(0 0 0.5px black) drop-shadow(0 0 0.5px black)'}}>   
                            <svg viewBox="0 0 128 128"><path fill="#ffffff" d="M51.395 7.758c-27.396 0-49.604 3.824-49.647 8.54l-.002-.009v27.293c0 4.723 22.227 8.535 49.649 8.535 27.42 0 49.648-3.836 49.648-8.535V16.289l-.002.01c-.043-4.717-22.255-8.541-49.646-8.541zm-17.268 16.57c1.39.09 2.805.169 4.25.236-.574-.026-1.18-.04-1.746-.07-.86-.046-1.665-.112-2.504-.166zm20.453.516c-1.064.012-2.104.037-3.185.037v-.002c-.654 0-1.275-.021-1.922-.025.642.004 1.273.017 1.922.017 1.075 0 2.127-.016 3.185-.027zM1.746 50.562v23.77c0 4.727 22.227 8.535 49.649 8.535 6.502 0 12.672-.228 18.357-.62 4.322-10.913 14.962-18.634 27.412-18.634 1.316 0 2.609.095 3.879.262V50.562c0 4.727-22.228 8.536-49.648 8.536-27.422 0-49.649-3.833-49.649-8.535zM97.164 67.25c-10.278 0-19.151 5.999-23.314 14.686a25.67 25.67 0 0 0-.805 1.884c-.2.522-.392 1.05-.559 1.586v.002a25.753 25.753 0 0 0-.447 1.647c-.03.124-.056.248-.084.373a25.7 25.7 0 0 0-.324 1.676 26.04 26.04 0 0 0-.307 3.986c0 9.287 4.9 17.426 12.254 21.98.485.3.98.584 1.484.852.03.016.062.03.092.047.453.238.917.462 1.385.674.076.034.152.07.229.103 1.001.441 2.036.82 3.1 1.133a25.62 25.62 0 0 0 1.654.426c.092.02.184.044.277.064.536.114 1.08.21 1.629.29l.232.028c.476.065.954.115 1.438.153l.375.03c.56.035 1.122.06 1.691.06a25.78 25.78 0 0 0 14.447-4.412 25.93 25.93 0 0 0 3.825-3.157 25.94 25.94 0 0 0 6.406-10.586 25.654 25.654 0 0 0 1.03-5.043 25.815 25.815 0 0 0 .03-4.877c-.007-.081-.011-.164-.02-.246a25.824 25.824 0 0 0-.347-2.41 25.664 25.664 0 0 0-.447-1.928c-.036-.131-.075-.261-.113-.392a25.648 25.648 0 0 0-.621-1.881c-.035-.091-.073-.18-.108-.271a25.719 25.719 0 0 0-.816-1.89c-.023-.045-.048-.09-.07-.136a25.79 25.79 0 0 0-.989-1.824l-.057-.096a25.85 25.85 0 0 0-1.148-1.736c-.045-.063-.087-.127-.133-.19a25.933 25.933 0 0 0-1.234-1.554c-.077-.09-.156-.179-.235-.268-.43-.49-.879-.966-1.345-1.422-.07-.068-.143-.133-.213-.2a25.986 25.986 0 0 0-1.516-1.347c-.04-.033-.082-.064-.123-.097a25.919 25.919 0 0 0-1.664-1.238c-.027-.019-.053-.039-.08-.057l-.012-.008a25.841 25.841 0 0 0-1.75-1.076c-.074-.042-.147-.087-.222-.129a25.76 25.76 0 0 0-2.094-1.031c-.6-.264-1.213-.507-1.836-.725-.115-.04-.232-.078-.348-.117a25.6 25.6 0 0 0-1.914-.563c-.102-.025-.207-.045-.31-.07a25.664 25.664 0 0 0-2.084-.412l-.01-.002a26.1 26.1 0 0 0-3.879-.289zm-9.102 10.914 24.028 13.871-24.028 13.871V78.164zM1.746 81.316v27.29c0 4.726 22.227 8.535 49.649 8.535 9.98 0 19.136-.536 26.89-1.412-6.478-5.408-10.601-13.541-10.601-22.64a29.6 29.6 0 0 1 .244-3.74 272.19 272.19 0 0 1-16.533.499c-27.422 0-49.649-3.832-49.649-8.532z"></path></svg>
                        </div>
                        <p className='text-[2vw] text-[#ffffff] max-[701px]:text-[2.5vw]' style={{textShadow: '0 0 2px black, 0 0 2px #ababab'}}>SQL</p>
                    </div>
                    <div className='skillscard w-[12vw] h-[14vw]  bg-[linear-gradient(to_bottom,#79d7fd,#25b8fc,#1a8abf)] flex flex-col justify-center items-center gap-[20%] rounded-2xl'>
                        <div className='w-[50%] h-[30%]' style={{filter: 'drop-shadow(0 0 0.5px black) drop-shadow(0 0 0.5px black)'}}>
                           <svg viewBox="0 0 128 128"><path fill="#ffffff" d="M55.387 66.469h8.333l-4.407-7.09-8.088 12.819h-3.681L57.382 56.8a2.324 2.324 0 011.931-.998c.765 0 1.478.363 1.892.972l9.876 15.424H67.4l-1.736-2.865h-8.438l-1.839-2.864zm38.235 2.864V55.958h-3.123v14.685c0 .402.156.791.454 1.089.298.298.7.466 1.141.466h14.244l1.841-2.865H93.622zm-51.677-2.397c3.033 0 5.496-2.449 5.496-5.482s-2.462-5.496-5.496-5.496H28.28v16.241h3.123V58.822h10.335c1.452 0 2.618 1.18 2.618 2.631s-1.167 2.631-2.618 2.631l-8.806-.013 9.324 8.127h4.538l-6.274-5.263h1.425zM9.059 72.198c-4.483 0-8.122-3.629-8.122-8.114s3.638-8.127 8.122-8.127h9.439c4.485 0 8.121 3.643 8.121 8.127s-3.636 8.114-8.121 8.114H9.059zm9.229-2.865a5.25 5.25 0 005.258-5.249 5.262 5.262 0 00-5.258-5.263H9.267a5.262 5.262 0 00-5.256 5.263 5.25 5.25 0 005.256 5.249h9.021zm59.314 2.865c-4.484 0-8.126-3.629-8.126-8.114s3.642-8.127 8.126-8.127h11.212l-1.829 2.864H77.81a5.267 5.267 0 00-5.264 5.263c0 2.903 2.36 5.249 5.264 5.249h11.263l-1.84 2.865h-9.631zm38.197-2.865a5.25 5.25 0 01-5.055-3.824h13.35l1.84-2.864h-15.19a5.266 5.266 0 015.055-3.824h9.163l1.854-2.864h-11.225c-4.484 0-8.126 3.643-8.126 8.127s3.642 8.114 8.126 8.114h9.631l1.841-2.865h-11.264"></path></svg>
                        </div>
                        <p className='text-[2vw] text-[#ffffff] max-[701px]:text-[2.5vw]' style={{textShadow: '0 0 2px black, 0 0 2px #ababab'}}>PL/SQL</p>
                    </div>
                </div>
            </div>

            <p className='text-center mt-[min(15dvh,105px)] text-[5vw] mb-[min(2dvh,14px)]'>Organizations</p>
            <div className='flex flex-col gap-[min(5dvh,35px)] mb-[min(12dvh,84px)]'>
                <div className='orgcard flex flex-row w-[80%] ml-[10%] bg-white border-[0.2vw] border-[#7cd3ef] rounded-3xl p-5 gap-[2vw]'>
                    <img src={pfgcimage}  className='orgcardimage w-[40%] aspect-video object-contain max-[701px]:w-[80%]!'></img>
                    <div className='orgcardtext flex flex-col w-[60%] justify-center'>
                        <h1 className='font-bold text-[2vw] max-[701px]:text-[3.5vw]'>Purdue Fighting Game Club</h1>
                        <h2 className='text-[1.5vw] max-[701px]:text-[2vw]'>Vice President</h2>
                        <p className='mt-[3dvh] text-[1.5vw] max-[701px]:text-[2vw]'>
                            As the Vice President, I helped with organizing and running a monthly tournament with over 50+ entrants in collaboration with the Purdue Alienware Gaming Lounge. 
                            Not only that I also ran the social media for the club, as well as designed a number of graphics for our events
                        </p>
                    </div>
                </div>

                <div className='orgcardrev flex flex-row w-[80%] ml-[10%] bg-white border-[0.2vw] border-[#7cd3ef] rounded-3xl p-5 gap-[2vw]'>
                    <div className='orgcardtext flex flex-col w-[60%] justify-center'>
                        <h1 className='font-bold text-[2vw] max-[701px]:text-[3.5vw]'>Indonesian Student Organization</h1>
                        <h2 className='text-[1.5vw] max-[701px]:text-[2vw]'>Former Member of Board of Marketing</h2>
                        <p className='mt-[3dvh] text-[1.5vw] max-[701px]:text-[2vw]'>
                            As a member of the Board of Marketing, I lead in designing marketing and branding material for the various events and promotions that the Indonesian Student
                            Organization held
                        </p>
                    </div>
                    <img src={permiasimage}  className='orgcardimage w-[40%] aspect-video object-contain p-5 max-[701px]:w-[80%]!'></img>
                </div>
            </div>

            <Footer></Footer>
        </div>
        </>
    );
}

export default AboutPage