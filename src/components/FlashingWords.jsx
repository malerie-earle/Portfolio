import useFetch from "../hooks/useFetch.jsx";
import React, { useState, useEffect } from 'react';

const FlashingWords = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWords, setShowWords] = useState(false);
  const { data: fetchedWords, loading, error } = useFetch('https://lacy-polished-brownie.glitch.me/words/');
  
  useEffect(() => {
    if (!fetchedWords || fetchedWords.length === 0 || loading || error) return;

    const startDelay = setTimeout(() => {
      setShowWords(true);

      const flashingInterval = setInterval(() => {
        setCurrentIndex(prevIndex =>
          prevIndex < fetchedWords.length - 1 ? prevIndex + 1 : 0
        );
      }, 700);

      return () => clearInterval(flashingInterval);
    }, 4000);

    return () => clearTimeout(startDelay);
  }, [fetchedWords, loading, error]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!fetchedWords || fetchedWords.length === 0 || !showWords) {
    return null; // Render nothing until the delay completes and showWords becomes true
  }

  const colors = [
    { hex: '#ff0000' },
    { hex: '#ff8000' },
    { hex: '#ffff00' },
    { hex: '#80ff00' },
    { hex: '#00ff00' },
    { hex: '#00ff80' },
    { hex: '#00ffff' },
    { hex: '#0080ff' },
    { hex: '#0000ff' },
    { hex: '#651371' },
    { hex: '#ff00ff' },
    { hex: '#ff0080' },
  ];
  
  return (
    
    <div className="flashingWord">
      <span style={{ color: colors[currentIndex % colors.length].hex }} className="flashingWord">
        {fetchedWords[currentIndex]}
      </span>
    </div>
   
  );
};

export default FlashingWords;
