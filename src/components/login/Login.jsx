import { useState } from "react";
import Joi from "joi-browser";
import styled from "styled-components";
import Form from "./Form";

const LoginContainer = styled.div`
  position: relative;
  display: flex;
  p {
    color: #607d8d;
  }
`;
const ImageBox = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  img {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ContentBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
`;
const FormBox = styled.div`
  width: 50%;
  h2,
  h3 {
    line-height: 1.6;
    letter-spacing: 1.5px;
    color: #607d8b;
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
    color: #607d8b;
    font-size: 1.4em;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export default function Login() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  return (
    <LoginContainer>
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
    </LoginContainer>
  );
}
