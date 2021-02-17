import { styles } from "../style.js";

const Home = () => {
  return (
    <div>
      <text style={styles.title}>SNAPZO</text>
      <text style={styles.tagLine}>Ann photographer app</text>
      <div style={styles.imageContainer}>
        <img
          src="https://iso.500px.com/wp-content/uploads/2016/03/pedroquintela-1500x844.jpg"
          height={500}
          width={1000}
        ></img>
      </div>
    </div>
  );
};

export default Home;
