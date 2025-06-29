import { useState } from "react";

const initialList = [
  {id: 0, title: 'Big Bellies '},
  {id: 1, title: 'Lunar Landscape'},
  {id: 2, title: 'Terracotta Army'},
];

const Reverse = () => {
  const [list, setList] = useState(initialList);

  const handleClick = () => {
    const nextList = list.slice().reverse();
    setList(nextList);
  }
  return (
    <>
      <button onClick={handleClick}>翻转</button>
      {
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      }
    </>
  )
}

export default Reverse;