import { useEffect, useState } from "react";

const App = () => {

  /**
   * 如果第二个参数undefined => 任何状态改变时，都会重新执行回调 => 组件更新的声明周期
   * 如果第二个参数不是array则报错
   * 如果第二个参数是一个数组，且是一个空数组 => 回调置灰在函数组件调用时执行一次 => componentDidMount
   * 如果第二个参数是一个有元素的数组 => 元素为状态的话，状态更新，回调则重新执行一次 => componentDidUpdate
   */
  const [count ,setCount] = useState(0);
  // useEffect后面跟的回调不能加async，如果想要这个语法糖，需要在回调里加一个自执行函数，如下：
  /**
   * ;(async () => {
   *  const data = await http.get('xxx');
   * })();
   */ 
  // 手动收集依赖
  useEffect(() => {
    console.log('useEffect');
    // depArr => the Array of dependencies
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    // 当页面卸载时
    // componentWillUnmount
    return () => {
      clearInterval(timer);
      console.log('useEffect cleanup');
    }
  }, []);
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div>useEffect</div>
    </>
  )
}

export default App;