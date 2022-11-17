import { useState } from "react";
import styled from "styled-components";
import Message from "./client_message/Message";
import FooterIcons from "./FooterIcons";
import FooterImage from "./FooterImage";
import FooterLinks from "./FooterLinks";
import FooterSearchBar from "./FooterSearchBar";
import EvenColumns from "./../../../common/EvenColumns";

const Container = styled.div`
  background-color: var(--clr-neutral-900);
  color: var(--clr-neutral-100);
`;
const Columns = styled(EvenColumns)`
  padding-block: 0px;
  width: 100%;
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

      <Columns>
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
      </Columns>
    </Container>
  );
};
export default Footer;
