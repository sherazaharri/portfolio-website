import '../page.css'
import WaveHeader from '../WaveHeader';
import Navbar from '../Navbar'
import BubblesPage from '../BubblesPage';
import Footer from '../Footer';

import pokedexsite from '../assets/pokedexsite.png'
import musicplayersite from '../assets/musicplayersite.png'
import taappform from '../assets/taappform.png'

function ProjectPage(){
    return(
        <>
        <BubblesPage></BubblesPage>
        <div className='w-full h-[100vh] bg-[] overflow-auto font-varela relative z-1'>
            <Navbar></Navbar>
            <h1 className='h-[min(40dvh,280px)] text-[clamp(80px,10vw,100px)] text-white text-center bg-[#00bbfa] pt-[min(16dvh,112px)] shadow' style={{textShadow: '0 0 4px #00749ab7, 0 0 4px #00749ab7, 0 0 4px #00749ab7'}}>Projects</h1>
            <WaveHeader></WaveHeader>

            <div className='flex flex-col w-full justify-start items-center mb-[min(12dvh,84px)] gap-[min(5dvh,35px)]'>
                <div className='projectcard flex flex-row gap-[2vw] bg-white border-[0.2vw] border-[#7cd3ef] rounded-3xl w-[80%] h-[min(50dvh,400px)] justify-start items-center'>
                    <div className='w-[80%] flex flex-col'>
                        <img src={pokedexsite} className='w-full aspect-video object-contain p-5'></img>
                        <div className='flex flex-row justify-center gap-5 text-[1.4vw] text-white'>
                            <a href='https://pokedexprojrz.netlify.app/' target='_blank' rel='noopener noreferrer'>
                                <button className='projectButton flex flex-row justify-center items-center gap-[0.5vw] w-[10vw] bg-[linear-gradient(to_bottom,#79d7fd,#25b8fc)] pt-[1dvh] pb-[1dvh] pl-[1vw] pr-[1.5vw] rounded-3xl'>
                                    <div className='projectButtonImg w-[1.8vw] h-auto pt-[0.2dvh]' style={{filter: 'drop-shadow(0 0 0.5px #656565) drop-shadow(0 0 0.5px #656565)'}}>
                                        <svg viewBox="0 0 128 128" fill="#ffffff">
                                            <circle cx="50" cy="50" r="42" stroke="#ffffff" strokeWidth="10" fill="none"/>
                                            <line x1="80" y1="80" x2="105" y2="105" stroke="#ffffff" strokeWidth="10" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                    <p style={{textShadow: '0 0 2px black, 0 0 2px #ababab'}}>View</p>
                                </button>
                            </a>
                            <a href='https://github.com/sherazaharri/pokedex-proj' target='_blank' rel='noopener noreferrer'>
                                <button className='projectButton flex flex-row justify-center items-center gap-2 w-[10vw] bg-[linear-gradient(to_bottom,#79d7fd,#25b8fc)] pt-[1dvh] pb-[1dvh] pl-[1vw] pr-[1.5vw] rounded-3xl'>
                                    <div className='projectButtonImg w-[1.8vw] h-auto' style={{filter: 'drop-shadow(0 0 0.5px #656565) drop-shadow(0 0 0.5px #656565)'}}>
                                        <svg viewBox="0 0 128 128" fill="#ffffff">
                                            <path d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.709-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.103 64 5.103z"/>
                                        </svg>
                                    </div>
                                    <p style={{textShadow: '0 0 2px black, 0 0 2px #ababab'}}>GitHub</p>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='projectcardtext flex flex-col pr-5 w-full'>
                        <h1 className='text-[5vw]'>Pokédex Website</h1>
                        <p className='text-[1.5vw]'>A custom-built Pokedex website powered by PokeAPI complete with search functionality, dynamic rendering, evolution chains, and detailed Pokémon information.</p>
                    </div>
                </div>


                <div className='projectcardrev flex flex-row gap-[2vw] bg-white border-[0.2vw] border-[#7cd3ef] rounded-3xl w-[80%] h-[min(50dvh,400px)]  justify-start items-center'>
                    <div className='projectcardtext flex flex-col pl-5 w-full'>
                        <h1 className='text-[5vw]'>Music Player</h1>
                        <p className='text-[1.5vw]'>A personal music player website displaying real-time song information alongside an interactive progress bar, playback controls, and playlist sidebar</p>
                    </div>
                    <div className='w-[80%] flex flex-col'>
                        <img src={musicplayersite} className='w-full aspect-video object-contain p-5'></img>
                        <div className='flex flex-row justify-center gap-5 text-[1.4vw] text-white'>
                            <a href='https://sherazasmusicplayer.netlify.app/' target='_blank' rel='noopener noreferrer'>
                                <button className='projectButton flex flex-row justify-center items-center gap-[0.5vw] w-[10vw] bg-[linear-gradient(to_bottom,#79d7fd,#25b8fc)] pt-[1dvh] pb-[1dvh] pl-[1vw] pr-[1.5vw] rounded-3xl'>
                                    <div className='projectButtonImg w-[1.8vw] h-auto pt-[0.2dvh]' style={{filter: 'drop-shadow(0 0 0.5px #656565) drop-shadow(0 0 0.5px #656565)'}}>
                                        <svg viewBox="0 0 128 128" fill="#ffffff">
                                            <circle cx="50" cy="50" r="42" stroke="#ffffff" strokeWidth="10" fill="none"/>
                                            <line x1="80" y1="80" x2="105" y2="105" stroke="#ffffff" strokeWidth="10" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                    <p style={{textShadow: '0 0 2px black, 0 0 2px #ababab'}}>View</p>
                                </button>
                            </a>
                            <a href='https://github.com/sherazaharri/music-player' target='_blank' rel='noopener noreferrer'>
                                <button className='projectButton flex flex-row justify-center items-center gap-2 w-[10vw] bg-[linear-gradient(to_bottom,#79d7fd,#25b8fc)] pt-[1dvh] pb-[1dvh] pl-[1vw] pr-[1.5vw] rounded-3xl'>
                                    <div className='projectButtonImg w-[1.8vw] h-auto' style={{filter: 'drop-shadow(0 0 0.5px #656565) drop-shadow(0 0 0.5px #656565)'}}>
                                        <svg viewBox="0 0 128 128" fill="#ffffff">
                                            <path d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.709-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.103 64 5.103z"/>
                                        </svg>
                                    </div>
                                    <p style={{textShadow: '0 0 2px black, 0 0 2px #ababab'}}>GitHub</p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='projectcard flex flex-row gap-[2vw] bg-white border-[0.2vw] border-[#7cd3ef] rounded-3xl w-[80%] h-[min(50dvh,400px)] justify-start items-center'>
                    <div className='w-[70%] flex flex-col'>
                        <img src={taappform} className='w-full aspect-video object-contain mb-5'></img>
                        <div className='flex flex-row justify-center gap-5 text-[1.4vw] text-white'>
                            <a href='https://github.com/sherazaharri/ta-appform-database' target='_blank' rel='noopener noreferrer'>
                                <button className='projectButton flex flex-row justify-center items-center gap-2 w-[10vw] bg-[linear-gradient(to_bottom,#79d7fd,#25b8fc)] pt-[1dvh] pb-[1dvh] pl-[1vw] pr-[1.5vw] rounded-3xl'>
                                    <div className='projectButtonImg w-[1.8vw] h-auto' style={{filter: 'drop-shadow(0 0 0.5px #656565) drop-shadow(0 0 0.5px #656565)'}}>
                                        <svg viewBox="0 0 128 128" fill="#ffffff">
                                            <path d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.709-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.103 64 5.103z"/>
                                        </svg>
                                    </div>
                                    <p style={{textShadow: '0 0 2px black, 0 0 2px #ababab'}}>GitHub</p>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='projectcardtext flex flex-col pr-5 w-full'>
                        <h1 className='text-[3.8vw]'>TA Application Form DB</h1>
                        <p className='text-[1.5vw]'>A fully normalized Oracle PL/SQL database system designed to manage Teaching Assistant applications, featuring modular PL/SQL packages, validation and audit triggers, bulk processing with FORALL, and many more.</p>
                    </div>
                </div>

                <a href='https://github.com/sherazaharri' target='_blank' rel='noopener noreferrer' className='relative projectButton2'>
                    <button className='projectcardmore relative z-5 flex flex-row justify-center items-center gap-3 text-[2vw] text-white w-[20vw] h-[min(7.7dvh,53.8984px)] bg-[linear-gradient(to_bottom,#79d7fd,#25b8fc)] pt-[1dvh] pb-[1dvh] pl-[1vw] pr-[1vw] rounded-3xl cursor-pointer'>
                        <p style={{textShadow: '0 0 3px #00749a60'}}>See More</p>
                        <div className='w-[2.5vw] max-[701px]:w-[4vw] h-auto' style={{filter: 'drop-shadow(0 0 0.5px #00749a60) drop-shadow(0 0 0.5px #00749a60)'}}>
                            <svg viewBox="0 0 128 128" fill="#ffffff">
                                <line x1="10" y1="64" x2="110" y2="64" stroke="#ffffff" strokeWidth="10" strokeLinecap="round"/>
                                <polyline points="75,29 115,64 75,99" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </button>
                    <div className='absolute z-4 Ripple2 border-2 border-[#9bdcf2c7] w-[20vw] h-[min(7.7dvh,53.8984px)] rounded-3xl max-[701px]:hidden'></div>
                    <div className='absolute z-4 Ripple2 border-2 border-[#9bdcf2c7] w-[20vw] h-[min(7.7dvh,53.8984px)] rounded-3xl max-[701px]:hidden'></div>
                </a>
            </div>

            <Footer></Footer>
        </div>
        </>
    );
}

export default ProjectPage