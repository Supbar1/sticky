import styled from "styled-components";
import { useState } from "react";
import MessageForm from "../navigation/footer/client_message/MessageForm";

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

  li {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0 10px;
    cursor: pointer;
  }

  li:hover {
    background: var(--clr-accent-100);
  }

  li a {
    transform: scale(2);
    color: var(--clr-accent-400);
  }
`;
const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: 0;
  line-height: 1;
  border-radius: 100vmax;
  padding: 1.25em 2.5em;
  @media (max-width: 600px) {
    padding: 1em 1.75em;
  }
  font-weight: var(--fw-bold);
  color: var(--clr-neutral-100);
  background-color: var(--clr-accent-400);
  box-shadow: 0 1.125em 1em -1em var(--clr-accent-500);
  white-space: nowrap;

  :hover,
  :focus-visible {
    background-color: var(--clr-accent-300);
  }
`;

const Buttons = ({
  username,
  usernameErrors,
  account,
  schema,
  setErrors,
  errors,
  setAccount,
}) => {
  const [isRegisterForm, setIsRegisterForm] = useState(false);
  return (
    <>
      <Remember>
        <label>
          <p>
            <input type="checkbox" name="" />
            &nbsp;Remember me
          </p>
        </label>
      </Remember>
      <InputBox>
        <span>Forget Password?</span>
        <Button>Sign in</Button>
      </InputBox>

      <h3>Login with social media</h3>
      <SocialMediaList>
        <li>
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a aria-label="twitter" href="https://www.twitter.com/">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a aria-label="instagram" href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </SocialMediaList>
    </>
  );
};

export default Buttons;
