import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import { createContext } from 'react';
import router from '@/config/router';
import { useEffect } from 'react';
import axios from './utils/http';

export const ProductContext = createContext();

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
    <ProductContext.Provider value={{a: 1}}>
      <RouterProvider router={routerConfig} />
    </ProductContext.Provider>
  )
}

export default App;