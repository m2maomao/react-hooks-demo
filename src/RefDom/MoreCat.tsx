import { useRef, useState } from "react";
import { setupCatList } from "./Data/morecat";
import './style.scss';

const MoreCat = () => {
  const itemsRef = useRef<Map<string, HTMLElement> | null>(null);
  const [catList] = useState(setupCatList);

  const scrollToCat = (cat: string) => {
    const map = getMap();
    const node = map.get(cat);
    if (!node) return;
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    })
  }

  const getMap = (): Map<string, HTMLElement> => {
    if (!itemsRef.current) {
      // 首次运行时初始化 Map
      itemsRef.current = new Map();
    }
    return itemsRef.current as Map<string, HTMLElement>;
  }

  return (
    <>
      <nav>
        <button onClick={(() => scrollToCat(catList[0]))}>Neo</button>
        <button onClick={(() => scrollToCat(catList[5]))}>Mia</button>
        <button onClick={(() => scrollToCat(catList[9]))}>Luna</button>
      </nav>
      <div className="cat-list">
        <ul>
          {catList.map((cat, idx) => (
            <li
              className={'c' + idx}
              key={cat}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat, node);
                }
                console.log('map: ', map);
                return () => {
                  map.delete(cat);
                }
              }}
            >
              <img src={cat} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MoreCat;