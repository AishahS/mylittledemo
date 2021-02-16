import "./App.css";
import { products } from "./products";
import { styles } from "./style";

function App() {
  const productList = products.map((product) => {
    return (
      <div style={styles.productContainer}>
        <img src={product.image} width={200} height={200} />
        <text style={styles.productName}>{product.name}</text>
        <text>{product.price}</text>
      </div>
    );
  });
  return (
    <>
      <text style={styles.title}>SNAPZO</text>
      <text style={styles.tagLine}>ALL YOU NEED FOR PHOTOGRAPHY</text>
      <div style={styles.imageContainer}>
        <img
          src="http://clipartmag.com/images/camera-logo-png-21.png"
          height={500}
          width={500}
        ></img>
      </div>
      <div style={styles.productList}>{productList}</div>
    </>
  );
}

export default App;
