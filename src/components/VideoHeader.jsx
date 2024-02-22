import React from 'react';
import './VideoHeader.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
export default function VideoHeader({ isVideoPlaying}) {
    return (
        <div className='flex justify-between items-center absolute w-full text-white py-4 px-2'>
            <button>
            {
                isVideoPlaying ? <PauseIcon style={{fontSize : '2rem'}} className='picon'/> : <PlayArrowIcon style={{fontSize : '2rem'}} className='picon'/>
            }
            </button>
        </div>
    )
}
