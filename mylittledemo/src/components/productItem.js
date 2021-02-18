import { ProductWrapper, GlobalStyle } from "../style.js";

const ProductItem = (props) => {
  return (
    <ProductWrapper>
      <GlobalStyle></GlobalStyle>
      <img src={props.image} width={200} height={200} />
      <p>{props.name}</p>
      <p class="product-price">{props.price}</p>
    </ProductWrapper>
  );
};

export default ProductItem;
