import { Title, Description, ShopImage, ImageContainer } from "../style.js";

const Home = () => {
  return (
    <>
      <Title>SNAPZO</Title>
      <Description>Ann photographer app</Description>
      <ImageContainer>
        <ShopImage
          src="https://iso.500px.com/wp-content/uploads/2016/03/pedroquintela-1500x844.jpg"
          width={1000}
          height={500}
        ></ShopImage>
      </ImageContainer>
    </>
  );
};

export default Home;
