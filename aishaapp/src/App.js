import "./App.css";
import { styles } from "./style";
import WishList from "./components/wishList";

function App() {
  return (
    <>
      <div style={styles.productList}>{WishList}</div>
    </>
  );
}

export default App;
