import React from 'react';
import gif from './animation.gif';

const GifComponent = () => {
  return (
    <div>
      <h2>¡Mira este GIF!</h2>
      <img src={gif} alt="Animation" />
    </div>
  );
}

export default GifComponent;
