import { useRef } from "react";
import './style.scss';

const CatFriends = () => {
  const catList = [
    {
      id: 1,
      name: 'Neo',
      url: 'https://placecats.com/neo/300/200'
    },
    {
      id: 2,
      name: 'Millie',
      url: 'https://placecats.com/millie/200/200'
    },
    {
      id: 3,
      name: 'Bella',
      url: 'https://placecats.com/bella/199/200'
    }
  ];
  // 使用 useRef 存储所有的 ref （用 Map 或对象管理）
  const catRefs = useRef(new Map<number, HTMLImageElement>());

  // 滚动到指定猫咪
  const scrollToCat = (id: number) => {
    const ref = catRefs.current.get(id);
    if(ref) {
      ref.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }

  return (
    <>
      <div className="nav">
        {
          catList.map(cat => (
            <button key={cat.id} onClick={() =>scrollToCat(cat.id)}>{cat.name}</button>
          ))
        }
      </div>
      <div className="cat-list">
        <ul>
          {
            catList.map((cat) => (
              <li key={cat.id}>
                <img
                  src={cat.url}
                  alt={cat.name}
                  ref={(el) => { if(el) catRefs.current.set(cat.id, el) }} // 动态绑定ref
                />
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default CatFriends;