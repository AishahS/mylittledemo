import "./App.css";
import { styles } from "./style";
import Home from "./components/Home";
import productList from "./components/ProductList";

function App() {
  return (
    <>
      <Home />
      <div style={styles.productList}>{productList}</div>
    </>
  );
}

export default App;
