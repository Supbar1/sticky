import styled from "styled-components";
import OrangeButton from "./../../common/OrangeButtons";

const Remember = styled.div`
  font-weight: 300;
  margin: 10px 0;
  p {
    transform: none;
  }
`;
const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  font-weight: 300;
  letter-spacing: 1px;
  width: 100%;
  span {
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  p,
  span {
    transform: none;
  }
  p a {
    color: var(--clr-accent-400);
    font-weight: var(--fw-bold);
    white-space: nowrap;
  }
`;
const SocialMediaList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
`;

const ListItem = styled.li`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;
  :hover {
    background: var(--clr-accent-100);
  }
  a {
    transform: scale(2);
    color: var(--clr-accent-400);
  }
`;
const Button = styled(OrangeButton)`
  padding: 1.25em 2.5em;
  @media (max-width: 600px) {
    padding: 1em 1.75em;
  }
`;

const SocialMediaHeader = styled.h4`
  color: var(--clr-primary-400);
  text-transform: uppercase;
  margin: 1rem 0 1.6rem 0;
  display: inline-block;
  letter-spacing: 1.5px;
  font-weight: var(--fw-regular);
  font-size: var(--fs-600);
`;
const Buttons = () => (
  <>
    <Remember>
      <p>
        <input type="checkbox" name="" />
        &nbsp;Remember me
      </p>
    </Remember>
    <InputBox>
      <span>Forget Password?</span>
      <Button>Sign in</Button>
    </InputBox>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <SocialMediaHeader>Login with social media</SocialMediaHeader>
    </div>
    <SocialMediaList>
      <ListItem>
        <a href="https://www.facebook.com/">
          <i className="fa-brands fa-facebook" />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.twitter.com/">
          <i className="fa-brands fa-twitter" />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.instagram.com/">
          <i className="fa-brands fa-instagram" />
        </a>
      </ListItem>
    </SocialMediaList>
  </>
);

export default Buttons;
