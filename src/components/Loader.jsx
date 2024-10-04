import React from 'react';
import LoadingImage from '../images/loaderimage.png'; // Replace with your image path

const Loader = () => {
  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh', // Retained height
  };

  const imageStyle = {
    width: '300px', // Set a specific width for the image
    height: 'auto', // Maintain aspect ratio
  };

  return (
    <div style={loaderStyle}>
      <div className="loader__image">
        <img src={LoadingImage} alt="Loading..." style={imageStyle} />
      </div>
    </div>
  );
}

export default Loader;
