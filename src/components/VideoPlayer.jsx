import React, { useRef } from 'react'
import collegeVideo from '../assets/college.mp4'

const VideoPlayer = ({play, setPlay}) => {
    const player = useRef(null);
    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlay(false);
        }
    }
  return (
    <div ref={player} onClick={closePlayer} className={`fixed top-0 left-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,0.9)] items-center justify-center ${play? "flex": "hidden"}`}>
        <video className='w-[90%] max-w-[900px] border-4' src={collegeVideo} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer