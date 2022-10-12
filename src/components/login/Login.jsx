import { useState } from "react";
import Joi from "joi-browser";
import styled from "styled-components";
import Form from "./Form";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  p,
  span {
    color: var(--clr-neutral-400);
  }
`;
const ImageBox = styled.div`
  position: relative;
  width: 50%;
  img {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 60em) {
    width: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0.15;
  }
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  @media (max-width: 60em) {
    width: 80%;
  }
  border: 1px solid black;
`;
const FormBox = styled.div`
  width: 50%;
  h2,
  h3 {
    line-height: 1.6;
    letter-spacing: 1.5px;
    color: var(--clr-neutral-400);
    font-weight: 600;
    font-size: 1.4em;
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 4px solid var(--clr-accent-400);
    display: inline-block;
    letter-spacing: 1px;
  }
  h3 {
    margin-top: 1rem;
    border-bottom: 0;
    letter-spacing: 1.5px;
    font-weight: 400;
    color: var(--clr-neutral-400);
    font-size: 1.4em;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;
const Login = () => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().min(3).max(30).required().label("Username"),
    password: Joi.string().min(3).max(30).required().label("Password"),
  };

  return (
    <Container>
      <ImageBox>
        <img
          src="https://www.woodtoolsanddeco.com/10220-large_default/set-of-200-wooden-sticks-square-40x40-mm-38-cm-length-birch-wood.jpg"
          alt="sorry for stick"
        ></img>
      </ImageBox>
      <ContentBox>
        <FormBox>
          <Form
            account={account}
            setAccount={setAccount}
            errors={errors}
            setErrors={setErrors}
            schema={schema}
            username={account.username}
            usernameErrors={errors.username}
            password={account.password}
            passwordErrors={errors.password}
          />
        </FormBox>
      </ContentBox>
    </Container>
  );
};
export default Login;
