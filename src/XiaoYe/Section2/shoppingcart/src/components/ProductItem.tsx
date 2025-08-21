import { Link } from 'react-router-dom';

interface ProductItemProps {
  data: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

// 路由
const ProductItem = ({ data }: ProductItemProps) => {
  return (
    <div>
      <Link to={ '/detail/' + data.id }>
        <img src={data.image} style={{width: '100px'}} />
      </Link>
      <div>
        <h1>{ data.name }</h1>
        <p>{ data.price }</p>
      </div>
      <hr />
    </div>
  )
}

export default ProductItem;