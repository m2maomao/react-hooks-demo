import { useState, useRef, useEffect } from "react";
import { todoData } from './Data/todo';

const App = () => {
  const [list, setList] = useState(todoData);
  const [iptValue, setIptValue] = useState('');
  const [shouldScroll, setShouldScroll] = useState(false);
  const refs = useRef<Map<number, HTMLElement>>(null);

  // 新增：监听list变化
  useEffect(() => {
    if (list.length > 0 && shouldScroll) {
      const lastItemId = list[list.length - 1].id;
      const map = getMap();
      const node = map.get(lastItemId);
      node?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
      setShouldScroll(false);
    }
  }, [list, shouldScroll]); // 依赖list

  const handleAdd = () => {
    setList([
      ...list,
      {
        id: list.length + 1,
        title: iptValue
      }
    ]);
    // 清空
    setIptValue('');
    // 设置需要滚动
    setShouldScroll(true);
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  }

  const getMap = (): Map<number, HTMLElement> => {
    if (!refs.current) {
      refs.current = new Map();
    }
    return refs.current;
  }

  

  return (
    <>
      <button onClick={handleAdd}>添加</button>
      <input
        type="text"
        value={iptValue}
        onChange={(e) => setIptValue(e.target.value)}
        onKeyDown={handleKeyDown}
        />
      <ul>
        {
          list.map((item) => (
          <li 
            key={item.id}
            ref={node => {
              const map = getMap();
              if(node) {
                map.set(item.id, node);
              } else {
                map.delete(item.id);
              }
            }}
          >{
            item.title
          }</li>
          ))
        }
      </ul>
    </>
  )
}

export default App;