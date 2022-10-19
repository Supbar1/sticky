import { useState } from "react";
import styled from "styled-components";
import Message from "./client_message/Message";
import FooterIcons from "./FooterIcons";
import FooterImage from "./FooterImage";
import FooterLinks from "./FooterLinks";
import FooterSearchBar from "./FooterSearchBar";

const Container = styled.div`
  background-color: var(--clr-neutral-900);
  color: var(--clr-neutral-100);
`;
const EvenColumns = styled.div`
  font-size: var(--fs-body);
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  @media (max-width: 60em) {
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
  }
`;
const MessageOnBigScreen = styled.div`
  display: flex;
  @media (max-width: 60em) {
    display: none;
  }
`;
const MessageOnSmallScreen = styled.div`
  display: none;
  @media (max-width: 60em) {
    display: flex;
  }
`;

const Footer = () => {
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);
  return (
    <Container>
      <MessageOnBigScreen>
        <Message
          setIsMessageOpen={setIsMessageOpen}
          isMessageOpen={isMessageOpen}
        />
      </MessageOnBigScreen>

      <EvenColumns>
        <FooterImage />
        <FooterLinks isMessageOpen={() => setIsMessageOpen(!isMessageOpen)} />

        <MessageOnSmallScreen>
          <Message
            setIsMessageOpen={setIsMessageOpen}
            isMessageOpen={isMessageOpen}
          />
        </MessageOnSmallScreen>

        <FooterIcons />
        <FooterSearchBar />
      </EvenColumns>
    </Container>
  );
};
export default Footer;
