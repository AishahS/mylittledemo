import { products } from "../products";
import ProductItem from "./productItem";

const productList = products.map((product) => {
  return (
    <ProductItem
      key={product.id}
      image={product.image}
      name={product.name}
      price={product.price}
    />
  );
});

export default productList;
