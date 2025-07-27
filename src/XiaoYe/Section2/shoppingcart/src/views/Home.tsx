import {Outlet, Link} from 'react-router-dom';
import './style.scss';

const App = () => {
  return (
    <>
      <h1>首页</h1>
      <div className='link'>
        <Link to="/">精品列表</Link>
        <Link to="/hot_list">热门列表</Link>
        <Link to="/list">全部列表</Link>
      </div>
      <Outlet />
    </>
  )
};

export default App;