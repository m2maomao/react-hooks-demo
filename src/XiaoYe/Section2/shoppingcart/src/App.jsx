import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

import router from '@/config/router';
import { useEffect } from 'react';
import axios from './utils/http';

const routerConfig = createHashRouter(router);

const App = () => {

  /**
   * useEffect 
   * useLayoutEffect
   */
  useEffect(() => {
    ;(async () => {
      // const products = await axios('/products');
      const {data} = await axios('/detail/2');
      console.log('data: ', data);
    })();
  }, []);
  return (
    <RouterProvider router={routerConfig} />
  )
}

export default App;