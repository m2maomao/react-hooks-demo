import { useState } from "react";

interface Artwork {
  id: number;
  title: string;
  seen: boolean;
}

const Favorite = () => {
  const initialList: Artwork[] = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
  ]

  const [myList, setMyList] = useState<Artwork[]>(initialList);
  const [yourList, setYourList] = useState<Artwork[]>(initialList);

  const handleToggleMyList = (artworkId: number, nextSeen: boolean) => {
    setMyList(
      myList.map(artwork => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      })
    )
  }

  const handleToggleYourList = (artworkId: number, nextSeen: boolean) => {
    setYourList(
      yourList.map(artwork => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      })
    )
  }

  return (
    <>
      <h1>艺术愿望清单</h1>
      <h2>我想看的艺术清单：</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList}
      />
      <h2>你想看的艺术清单：</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList}
      />
    </>
  )
}

interface ItemListProps {
  artworks: Artwork[];
  onToggle: (id: number, seen: boolean) => void;
}

const ItemList = ({ artworks, onToggle }: ItemListProps) => {
  return (
    <ul>
      {
        artworks.map(artwork => (
          <li key={artwork.id}>
            <label>
              <input type="checkbox" checked={artwork.seen} onChange={e => {
                onToggle(artwork.id, e.target.checked)
              }} />
              {artwork.title}
            </label>
          </li>
        ))
      }
    </ul>
  )
}

export default Favorite;