import { useState, useEffect } from "react"

const Playground = () => {
  const [text, setText] = useState('a');

  useEffect(() => {
    const onTimeout = () => {
      console.log('⏰ ' + text);
    }
    console.log('🔵 调度 "' + text + '" 日志');
    const timer = setTimeout(onTimeout, 1000);
    return () => {
      console.log('🟡 取消 "' + text + '" 日志');
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <>
      <label>
        日志内容：{' '}
        <input value={text} onChange={e => setText(e.target.value)} />
      </label>
      <h1>{text}</h1>
    </>
  )
}

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '卸载' : '挂载'}组件
      </button>
      {show && <hr />}
      {show && <Playground />}
    </>
  )
}

export default App;