import React from 'react';
import LoadingVideo from '../images/new_loading.mp4';

const Loader = () => {
  const loaderStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh', // Reduced height to make it smaller
};

const videoStyle = {
  width: '300px', // Set a specific width for the video
  height: 'auto', // Maintain aspect ratio
};
  

  return (
    <div style={loaderStyle}>
      <div className="loader__video">
        <video autoPlay loop muted style={videoStyle}>
          <source src={LoadingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Loader;
