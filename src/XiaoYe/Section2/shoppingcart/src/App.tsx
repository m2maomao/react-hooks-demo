import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import { createContext } from 'react';
import router from './config/router';
import { useProducts } from './hooks/index';

export const ProductContext = createContext<Product[]>([]);

const routerConfig = createHashRouter(router);

const App = () => {

  /**
   * useEffect 
   * useLayoutEffect
   */
  const [products ] = useProducts('/products');
  return (
    <ProductContext.Provider value={ products }>
      <RouterProvider router={routerConfig} />
    </ProductContext.Provider>
  )
}

export default App;