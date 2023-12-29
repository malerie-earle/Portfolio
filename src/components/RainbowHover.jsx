import React, { useState } from 'react';

const RainbowHover = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentHoverColorIndex, setCurrentHoverColorIndex] = useState(0);

  const colors = [
    '#ff0000',
    '#ff8000',
    '#ffff00',
    '#80ff00',
    '#00ff00',
    '#00ff80',
    '#00ffff',
    '#0080ff',
    '#0000ff',
    '#651371',
    '#ff00ff',
    '#ff0080'
  ];

  const handleMouseEnter = () => {
    setIsHovered(true);
    // eslint-disable-next-line no-unused-vars
    const interval = setInterval(() => {
      setCurrentHoverColorIndex(currentHoverColorIndex => (currentHoverColorIndex + 1) % colors.length);
    }, 500); // Change the interval duration (in milliseconds) as needed
    // Store the interval ID in state
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentHoverColorIndex(0); // Reset color index on mouse leave
  };

  return (
    <span
      className="rainboxText" 
      style={{
        position: 'relative',
        display: 'inline',
        color: isHovered ? colors[currentHoverColorIndex % colors.length] : 'inherit',
        transition: 'color 0.2s ease-in-out' // Adjust the transition duration as needed
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  );
};

export default RainbowHover;
