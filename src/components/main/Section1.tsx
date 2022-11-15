import { Link } from "react-router-dom";
import Text from "../../common/Text";
import Center from "../../common/Center";
import EvenColumns from "../../common/EvenColumns";
import OrangeButton from "../../common/OrangeButtons";

const Section1 = () => (
  <EvenColumns>
    <Center>
      <Text heading2="Our passion are sticks!" heading3={""} />
      <Link to="products">
        <OrangeButton>Grab your stick!</OrangeButton>
      </Link>
    </Center>
    <Center>
      <img
        style={{ width: "90%" }}
        src="https://st2.depositphotos.com/1967477/5333/v/600/depositphotos_53335539-stock-illustration-tree-silhouette.jpg"
        alt="big stick"
      />
    </Center>
  </EvenColumns>
);

export default Section1;
