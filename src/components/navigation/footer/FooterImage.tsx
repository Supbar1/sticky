import styled from "styled-components";
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 35em) {
    margin: 1rem;
  }
`;
const Image = styled.img`
  @media (max-width: 60em) {
    width: min(450px, 100%);
  }
`;
const FooterImage = () => (
  <Center>
    <Image
      src="https://thumbs.dreamstime.com/b/cinnamon-sticks-isolated-black-background-food-photo-114308714.jpg"
      alt="sorry for stick"
    />
  </Center>
);
export default FooterImage;
