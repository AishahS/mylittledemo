import { styles } from "../style.js";

const WishItem = (props) => {
  return (
    <>
      <div style={styles.imageContainer}>
        <div>
          <img src={props.image} width={200} height={200} />
        </div>
      </div>
      <div style={styles.imageContainer}>
        <text style={styles.wishName}>{props.description}</text>
      </div>
    </>
  );
};

export default WishItem;
