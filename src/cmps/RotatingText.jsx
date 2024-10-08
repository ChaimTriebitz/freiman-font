import React, { useState, useEffect } from 'react';

export const RotatingText = ({ staticText = '', rotatingTexts = [], frequency = 3 }) => {
   const [currIdx, setCurrIdx] = useState(0);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setCurrIdx((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
      }, frequency * 1000);

      return () => clearInterval(intervalId); // Cleanup interval on unmount
   }, []);


   return (
      <p className="rotating-text" style={{
         '---text-frequency': `${Math.max(...rotatingTexts.map(t => t.length)) * 10}px`,
         '--rotating-text-frequency': `${frequency}s`, // Pass the CSS variable to SCSS via inline style
      }}>
         {staticText}
         <span>{rotatingTexts[currIdx]}</span>
      </p>
   );
};

