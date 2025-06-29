import { useState } from "react";

let nextId = 3;

const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

const List = () => {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialArtists);

  const handleClick = () => {
    const insertAt = 1; // 可能是任何索引
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName('');
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  return (
    <>
      <h3>振奋人心的雕塑家们：</h3>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>插入</button>
      <ul>
      {
        artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))
      }
      </ul>
    </>
  )
}

export default List;