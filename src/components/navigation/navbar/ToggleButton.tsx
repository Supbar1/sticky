import styled from "styled-components";
import { useShoppingContext } from "../../products/ShopContext";

const Container = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 60em) {
    display: flex;
    margin-right: 20px;
    width: 60px;
    height: 41px;
  }
`;
const Bar = styled.span`
  height: 8px;
  width: 45px;
  background-color: var(--clr-accent-400);
  border-radius: 10px;
`;
const ToggleButton = () => {
  const { isMenuOpen, setIsMenuOpen } = useShoppingContext();
  return (
    <Container onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <Bar></Bar>
      <Bar></Bar>
      <Bar></Bar>
    </Container>
  );
};

export default ToggleButton;
