import {
  useOutletContext
} from 'react-router';
import ProductItem from "../../components/ProductItem";

interface OutletContext {
  hotList?: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
    hot?: boolean;
  }>;
}

const App = () => {
  const { hotList } = useOutletContext<OutletContext>();
  console.log('hotList: ', hotList);
  return (
    <>
      <h1>热门商品</h1>
      <div>
        {
          hotList && hotList.map(item => (
            <ProductItem data={item} key={ item.id } />
          ))
        }
      </div>
    </>
  )
};

export default App;