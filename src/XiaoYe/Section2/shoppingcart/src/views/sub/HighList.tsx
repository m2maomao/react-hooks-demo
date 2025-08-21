import { useOutletContext } from "react-router";
import ProductItem from "../../components/ProductItem";

const App = () => {
  const { highList } = useOutletContext();
  console.log('highList: ', highList);
  return (
    <>
      <h1>精品商品</h1>
      <div>
        {
          highList && highList.map((item) => (
            <ProductItem data={item} key={item.id} />
          ))
        }
      </div>
    </>
  )
};

export default App;