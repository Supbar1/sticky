import { Link } from "react-router-dom";
import Text from "../../common/Text";
import Center from "../../common/Center";
import EvenColumns from "../../common/EvenColumns";
import Button from "../../common/OrangeButtons";
import { useShoppingContext } from "../products/ShopContext";

const Section1 = () => {
  const { setIsMenuOpen } = useShoppingContext();
  return (
    <EvenColumns>
      <Center>
        <Text heading2="Our passion are sticks!" />
        <Link to="products">
          <Button onClick={() => setIsMenuOpen(false)}>Grab your stick!</Button>
        </Link>
      </Center>
      <Center>
        <img
          style={{ marginTop: "2rem", width: "90%" }}
          src="https://st2.depositphotos.com/1967477/5333/v/600/depositphotos_53335539-stock-illustration-tree-silhouette.jpg"
          alt="big stick"
        />
      </Center>
    </EvenColumns>
  );
};
export default Section1;
