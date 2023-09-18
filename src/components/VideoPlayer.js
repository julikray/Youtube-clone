import React from 'react';
import "./VideoPlayer.css";

function VideoPlayer({ videoId }) {
  return (
    <div className='Player'>
      <iframe
        title="YouTube Video Player"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      ></iframe>
      
    </div>
  );
}

export default VideoPlayer;