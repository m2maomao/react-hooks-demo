import {
  useState,
  memo,
  useMemo,
  useCallback,
} from "react";

/**
 *  函数组件最大的弱点： 渲染执行
 *  当一个组件的状态发生了改变的时候，相关视图是必然要更新的
 *  函数组件在视图更新的需求来临的时候，函数是必然要执行的
 * 
 * 
 */ 

// interface ChildProps {
//   count2: number;
// }

/**
 *  第一种情况： console在更改count1的时候也会被执行
 */

// const Child = (props: ChildProps) => {
//   console.log('Child function is recalled.');
//   return (
//     <>
//       <h1>count2: {props.count2}</h1>
//     </>
//   )
// };

/**
 *  使用memo包裹，此时更改count1时，console不再执行 
 */

// const Child = memo((props: ChildProps) => {
//   console.log('Child function is recalled.');
//   return (
//     <>
//       <h1>count2: {props.count2}</h1>
//     </>
//   )
// });

/**
 *  memo核心会对引用进行比较，这种比较是浅比较
 * childData引用，如果更新了一个新的引用，那么Child就会被执行
 * 如果引用没有变化，Child就不会执行
 * 
 * count1更新，App必然要执行
 * App => childData必然要重新赋值一个新的引用
 */ 

interface ChildProps {
  count2: number;
  cbSetCount2: () => void;
}

const Child = memo((props: ChildProps) => {
  console.log('Child function is recalled.');
  return (
    <>
      <h1>count2: {props.count2}</h1>
      <button onClick={props.cbSetCount2}>+</button>
    </>
  )
});

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // App执行的时候，如下也要重新执行，重新执行则引用值会改变
  // const cbSetCount2 = () => {
  //   setCount2(count2 + 1);
  // }

  // useMemo主要针对值，useEffect主要针对函数
  const cbSetCount2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <>
      <h1>count1: {count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
      <Child count2={ count2 } cbSetCount2={cbSetCount2} />
    </>
  )
}

export default App;