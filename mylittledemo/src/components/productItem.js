import { styles } from "../style.js";

const ProductItem = (props) => {
  return (
    <div style={styles.productContainer}>
      <img src={props.image} width={200} height={200} />
      <text style={styles.productName}>{props.name}</text>
      <text>{props.price}</text>
    </div>
  );
};

export default ProductItem;
