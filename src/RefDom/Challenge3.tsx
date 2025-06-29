import { useState, useRef, useEffect } from "react";
import './Challenge3.scss';

export default function CatFriends() {
  const selectedRef = useRef<HTMLLIElement | null>(null);
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }, [index]);

  const handleClick = () => {
    if (index < catList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <>
      <nav>
        <button onClick={handleClick}>下一个</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={index === i ? selectedRef : null}
            >
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"猫猫 #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList: { id: number; imageUrl: string }[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://loremflickr.com/250/200/cat?lock=" + i,
  });
}
