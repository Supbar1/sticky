import styled from "styled-components";
import { useShoppingContext } from "./../products/ShopContext";
import OrangeButton from "./../../common/OrangeButtons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: min(350px, 80vh);
  font-size: var(--fs-700);
`;
const Heading2 = styled.h2`
  font-size: var(--fs-primary-heading);
  line-height: 1.6;
  font-weight: var(--fw-bold);
  text-decoration: underline var(--clr-accent-400);
  padding-block: var(--size-400);
  @media (max-width: 60em) {
    font-size: var(--fs-800);
    margin: 1rem;
  }
`;
const ButtonStyled = styled(OrangeButton)`
  margin: 2rem;
  @media (max-width: 60em) {
    margin: 1rem;
  }
`;
const LogOut = () => {
  const { userName, setUsername } = useShoppingContext();
  return (
    <Container>
      <Heading2>Welcome: </Heading2>
      {userName}
      <ButtonStyled onClick={() => setUsername("")}>Log out</ButtonStyled>
    </Container>
  );
};
export default LogOut;
