import { useState } from "react";

let initialShapes = [
  {id: 0, type: 'circle', x: 50, y: 100},
  {id: 1, type: 'square', x: 150, y: 100},
  {id: 2, type: 'circle', x: 250, y: 100},
]

const shapeEditor = () => {
  const [shapes, setShapes] = useState(initialShapes);

  const handleClick = () => {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        }
      }
    });
    setShapes(nextShapes);
  }
  return (
    <>
      <button onClick={handleClick}>所有圆形向下移动！</button>
      {shapes.map(shape => (
        <div key={shape.id} style={{
          position: 'absolute',
          backgroundColor: 'purple',
          borderRadius: '50%',
          width: 20,
          height: 20,
          left: shape.x,
          top: shape.y,
        }} />
      ))}
    </>
  )
}

export default shapeEditor;