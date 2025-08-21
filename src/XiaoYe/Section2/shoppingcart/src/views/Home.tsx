import { useContext, useMemo} from 'react';
import { ProductContext } from '../App';

import {Outlet, Link} from 'react-router-dom';
import './style.scss';

const App = () => {
  const products = useContext(ProductContext);
  const hotList = useMemo(() => products?.filter(item => item.hot) || [], [products]);
  const highList = useMemo(() => products?.filter(item => item.high) || [], [products]);
  return (
    <>
      <h1>首页</h1>
      <div>
        <div  className='link'>
          <Link to="/">精品列表</Link>
          <Link to="/hot_list">热门列表</Link>
          <Link to="/list">全部列表</Link>
        </div>
        <Outlet context={ { hotList, highList }} />
      </div>
    </>
  )
};

export default App;