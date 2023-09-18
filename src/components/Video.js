import React, { useEffect, useState } from 'react';
import './Video.css';
import axios from 'axios';

function Video() {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  useEffect(() => {
    const API_KEY = 'AIzaSyBLFEbFVTwJ4sDAn1UTxQQIg4WPX0U6CYY';
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=latest&key=${API_KEY}`;

    axios.get(apiUrl)
      .then(response => {
        setVideos(response.data.items);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  const handleVideoClick = (videoId) => {
    setSelectedVideoId(videoId);
  };

  return (
    <div className="video">
      {selectedVideoId && (
        <div className="video-player">
          <iframe 
            src={`https://www.youtube.com/embed/${selectedVideoId}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    
      <div className='Allvideo'>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <div className="videoimg" onClick={() => handleVideoClick(video.id.videoId)}>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="thumbnail"
              />
              <div className="videoinfo">
                <h3 className="title">{video.snippet.title}</h3>
                <p className="channel-name">Channel: {video.snippet.channelTitle}</p>
                <p className="published-time">Published: {video.snippet.publishedAt}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div>

     
    </div>
  );
}

export default Video;