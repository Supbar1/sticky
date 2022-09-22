import "../../style.css";
import Text from "./common/Text";
import Center from "./common/Center";
import EvenColumns from "./common/EvenColumns";

export default function Section2() {
  return (
    <EvenColumns>
      <Center>
        <Text heading2="What's diffrent about Sticky?" heading3="" />
      </Center>
      <Center>
        <Text heading2="" heading3={"Wide variety of materials"} />
        <Text heading2="" heading3={"Every shape you can imagine"} />
        <Text heading2="" heading3={"Smooth or rough? We've got them all!"} />
      </Center>
    </EvenColumns>
  );
}
