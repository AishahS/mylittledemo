import "./App.css";
import { GlobalStyle, ListWrapper } from "./style";
import Home from "./components/Home";
import productList from "./components/ProductList";
import { ThemeProvider } from "styled-components";

const theme = {
  main: "black",
  background: "grey",
  titleColor: "#ECE6E1",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <ListWrapper>{productList}</ListWrapper>
    </ThemeProvider>
  );
}

export default App;
