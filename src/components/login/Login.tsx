import { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import Image from "./Image";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
interface LoginProps {
  username: string;
  password: string;
}
const Login = () => {
  const [account, setAccount] = useState({} as LoginProps);
  const [errors, setErrors] = useState({} as LoginProps);
  const Joi = require(`joi`);

  const username = Joi.string().min(3).max(30).required().label("Username");
  const password = Joi.string().min(3).max(30).required().label("Password");

  const schema = Joi.object({
    username: username,
    password: password,
  });

  return (
    <Container>
      <Image />
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
    </Container>
  );
};
export default Login;
