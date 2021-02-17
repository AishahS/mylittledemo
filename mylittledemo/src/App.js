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
      <text style={styles.tagLine}>Ann photographer app</text>
      <div style={styles.imageContainer}>
        <img
          src="https://iso.500px.com/wp-content/uploads/2016/03/pedroquintela-1500x844.jpg"
          height={500}
          width={1000}
        ></img>
      </div>
      <div style={styles.productList}>{productList}</div>
    </>
  );
}

export default App;
