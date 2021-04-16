import React from 'react';
import './LargeButton.css';

const LargeButton = ({mode, text}) => {
  return (
    <button className={`button ${mode}`}>
      { text }
    </button>
  );
};

export default LargeButton;