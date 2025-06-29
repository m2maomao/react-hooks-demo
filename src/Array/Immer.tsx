import { useState } from "react";

import { useImmer } from "use-immer";

let nextId = 3;

interface IArtwork {
  id: number;
  title: string;
  seen: boolean;
}

const initialList: IArtwork[] = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

const BucketList = () => {
  const [myList, updateMyList] = useImmer(initialList);
  const [yourList, updateYourList] = useImmer(initialList);

  const handleToggleMyList = (id: number, nextSeen: boolean): void => {
    updateMyList(draft => {
      const artwork = draft.find(a => a.id === id);
      if (artwork) {
        artwork.seen = nextSeen;
      }
    });
  }

  const handleToggleYourList = (id: number, nextSeen: boolean): void => {
    updateYourList(draft => {
      const artwork = draft.find(a => a.id === id);
      if (artwork) {
        artwork.seen = nextSeen;
      }
    });
  }

  return (
    <>
      <h1>艺术愿望清单</h1>
      <h2>我想看的艺术清单</h2>
      <ul>
        {
          myList.map((item) => (
            <li key={item.id}>
              <label>
                <input type="checkbox" checked={item.seen} onChange={e => {
                  handleToggleMyList(item.id, e.target.checked);
                }} />
                {item.title}
              </label>
            </li>
          ))
        }
      </ul>
      <h2>你想看的艺术清单</h2>
      <ul>
        {
          yourList.map((item) => (
            <li key={item.id}>
              <label>
                <input type="checkbox" checked={item.seen} onChange={e => {
                  handleToggleYourList(item.id, e.target.checked);
                }} />
                {item.title}
              </label>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default BucketList;