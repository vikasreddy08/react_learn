import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import axios from 'axios';

// Import Lottie animation files
import initialAnimation from '../../assets/Animation - 1717665713549.json';
import midwayAnimation from '../../assets/Animation - 1726045622134.json';
import finalAnimation from '../../assets/circleSpinner.json';

const Loader = ({ apiUrl }) => {

  return (
    <div>
      <Lottie animationData={initialAnimation} style={{ width: 200, height: 200 }} />
    </div>
  );
};

export default Loader;
