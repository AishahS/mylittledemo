import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.main};
    background-color: ${(props) => props.theme.background};
  }
  .p {
  font-weight: bold;
  padding-top: 5;
  padding-bottom: 5;
}

.product-price {
  color:${(props) => props.theme.titleColor};
}
`;

export const Title = styled.h1`
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.h4`
  font-size: 48;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShopImage = styled.img`
  margin-top: 10px;
`;

export const ListWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const productName = styled.div`
  font-weight: bold;
  padding-top: 5;
  padding-bottom: 5;
`;

export const ProductWrapper = styled.div`
  margin: 20;
  display: flex;
  flex-direction: column;
  width: 200;
  height: 250;
  align-items: center;
`;
