import React from 'react';
import LoadingVideo from '../images/loading.mp4';

const Loader = () => {
  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust based on your layout
  };

  const videoStyle = {
    maxWidth: '100%', // Ensures responsiveness
    maxHeight: '100%', // Ensures responsiveness
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
