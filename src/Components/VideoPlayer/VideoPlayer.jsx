import React, { useRef } from 'react'
import './VideoPlayer.css'
import collage_video from '../../assets/collage-video.mp4'

const VideoPlayer = ({ playState,setPlayState }) => {

    const player=useRef();

    const closePlayer=(e)=>{
        if(e.target===player.current){
            setPlayState(false);
        }
        
    }
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video  src={collage_video} muted autoPlay controls>
           
        </video>
    </div>
  )
}

export default VideoPlayer
