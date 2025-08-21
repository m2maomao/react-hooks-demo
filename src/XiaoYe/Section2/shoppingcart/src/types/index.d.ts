// 产品数据类型定义
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  hot?: boolean;
  high?: boolean;
}