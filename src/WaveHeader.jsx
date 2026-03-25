import Wave from 'react-wavify'

function WaveHeader(){
    return(
        <Wave 
            fill="url(#gradient)" 
            className='rotate-[180deg]' 
            options={{
                height: 80,
                amplitude: 15,
                speed: 0.1,
                points: 3
                }}
        >
            <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="10%"  stopColor="#79d7fd" />
                <stop offset="90%" stopColor="#00bbfa" />
                </linearGradient>
            </defs>
        </Wave>
    )
}

export default WaveHeader