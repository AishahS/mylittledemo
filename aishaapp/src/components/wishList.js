import { styles } from "../style.js";
import { Wishes } from "./Wishes.js";
import WishItem from "./WishItem";

const wishList = Wishes.map((wish) => {
  return (
    <WishItem key={wish.id} image={wish.image} description={wish.description} />
  );
});

export default wishList;
