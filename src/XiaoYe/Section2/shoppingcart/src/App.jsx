import {createHashRouter, RouterProvider} from 'react-router-dom';
import router from '@/config/router';

const routerConfig = createHashRouter(router);

const App = () => {
  return (
    <RouterProvider router={routerConfig} />
  )
}

export default App;