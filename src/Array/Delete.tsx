import { useState } from "react";

const initialArtists = [
    {id: 0, name: 'Marta Colvin Andrade'},
    {id: 1, name: 'Lamidi Olonade Fakeye'},
    {id: 2, name: 'Louise Nevelson'}
  ];

const Delete = () => {
  const [artists, setArtists] = useState(initialArtists);
  return (
    <>
      <h3>振奋人心的雕塑家们：</h3>
      <ul>
        {
          artists.map(artist => (
            <li key={artist.id}>
              {artist.name}
              <button onClick={() => {
                setArtists(
                  artists.filter(a => a.id !== artist.id)
                )
              }}>删除</button>
            </li>
          ))
        }
      </ul>
      <button onClick={() => {
        console.log('原始值：', initialArtists)
      }}>打印initialArtists</button>
    </>
  )
}

export default Delete;