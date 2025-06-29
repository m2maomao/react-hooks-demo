import { useRef} from "react";
import './style.scss';

const App = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({
      behavior: 'smooth', // smooth光滑，auto立即
      block: 'start', // start顶部对齐，center居中对齐，end底部对齐，nearest最近对齐；纵向
      inline: 'nearest', // 与block类似；横向
    });
  }

  return (
    <>
      <button onClick={handleClick}>滑动到指定的位置</button>
      <div className="section" ref={ref}>目标区域</div>
    </>
  )
}

export default App;