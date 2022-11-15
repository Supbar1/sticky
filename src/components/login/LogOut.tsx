import styled from "styled-components";
import { useShoppingContext } from "./../products/ShopContext";

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
  padding-block: var(--size-700);
  text-decoration: underline var(--clr-accent-400);
  @media (max-width: 60em) {
    font-size: var(--fs-800);
    margin: 1rem;
    padding-block: var(--size-400);
  }
`;
const ButtonStyled = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: 0;
  line-height: 1;
  border-radius: 100vmax;
  padding: 1.25em 2.5em;
  font-weight: var(--fw-bold);
  font-size: var(--fs-button);
  color: var(--clr-neutral-100);
  background-color: var(--clr-accent-400);
  box-shadow: 0 1.125em 1em -1em var(--clr-accent-500);
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
