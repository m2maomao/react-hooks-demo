import Home from '@/views/Home';
import Detail from '@/views/Detail';
import List from '@/views/List';
import Cart from '@/views/Cart';
import NotFound from '@/views/NotFound';

import HighList from '@/views/sub/HighList';
import HotList from '@/views/sub/HotList';

export default [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <HighList />
      },
      {
        path: '/hot_list',
        element: <HotList />
      }
    ]
  },
  {
    path: '/list',
    element: <List />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/detail/:id',
    element: <Detail />
  },
  {
    path: '*',
    element: <NotFound />
  }
]