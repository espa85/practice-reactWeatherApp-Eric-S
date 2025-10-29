import React, { useState, useEffect } from 'react';

function Spinner() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    // Update the rotation angle every 50ms (smooth spinning effect)
    const id = setInterval(() => {
      setAngle((a) => (a + 10) % 360); // rotate by 15 degrees each tick
    }, 50);

    // Cleanup when the component unmounts
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: '50%',
        border: '4px solid #2b3d6e',
        borderTopColor: '#8fb3ff',
        transform: `rotate(${angle}deg)`,
        transition: 'transform 50ms linear',
        margin: '1rem auto',
      }}
    />
  );
}

export default Spinner;
