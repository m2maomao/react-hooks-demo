import { useState } from "react";

const MovingDot = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  
  return (
    <div onPointerMove={e => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }}
    style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
    }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: '-10px',
        top: '-10px',
        width: '20px',
        height: '20px',
      }} />
    </div>
  )
}

export default MovingDot;