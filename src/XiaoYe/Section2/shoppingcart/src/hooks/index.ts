import { useEffect, useState } from "react";
import http from '../utils/http';

const useProducts = (url) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await http(url);
        setProducts(data);
      } catch (err) {
        console.log('err: ', err);
      }
    })();
  }, []);

  return [ products, setProducts ];
}

export {
  useProducts
};