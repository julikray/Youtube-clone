import React from 'react';
import "./VideoList.css";

function VideoList({ videos, onVideoClick }) {
  return (
    <div className='VideoList'>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <div className="video-item" onClick={() => onVideoClick(video.id.videoId)}>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="thumbnail"
              />
              <div className="video-info">
                <h3 className="title">{video.snippet.title}</h3>
                <p className="channel-name">Channel: {video.snippet.channelTitle}</p>
                <p className="published-time">Published: {video.snippet.publishedAt}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;