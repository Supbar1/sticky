import Text from "../../common/Text";
import Center from "../../common/Center";
import EvenColumns from "../../common/EvenColumns";
import styled from "styled-components";

const CenterAnimated = styled(Center)`
  animation: animate 1.6s ease-in;
  @keyframes animate {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
      transform: scale(1) translateY(20px) translateX(0px) rotate(0);
    }
    100% {
      opacity: 1;
    }
  }
`;
const OptionalText = styled(Text)`
 
`;
const Section2 = () => {
  return (
    <EvenColumns>
      <CenterAnimated>
        <OptionalText heading2="What's diffrent about Sticky?" wideDisplayOnly/>
      </CenterAnimated>
      <CenterAnimated>
        <OptionalText heading3={"Wide variety of materials"} wideDisplayOnly/>
        <OptionalText heading3={"Every shape you can imagine"} wideDisplayOnly/>
        <OptionalText heading3={"Smooth or rough? We've got them all!"} wideDisplayOnly/>
      </CenterAnimated>
    </EvenColumns>
  );
};

export default Section2;
