import { useState } from "react";
import styled from "styled-components";
import { useShoppingContext } from "../products/ShopContext";
import Form from "./Form";
import Image from "./HandImage";
import LogOut from "./LogOut";

const Container = styled.div`
  min-height: 85vh;
  position: relative;
  display: flex;
  justify-content: center;
  @media (max-width: 60em) {
    min-height: 58vh;
  }
`;
interface AcountProps {
  username: string;
  password: string;
}

const Login = () => {
  const Joi = require(`joi`);
  const { userName } = useShoppingContext();
  const [account, setAccount] = useState({
    username: "",
    password: "",
  } as AcountProps);
  const [errors, setErrors] = useState({} as AcountProps);

  const username = Joi.string().min(3).max(30).required().label("Username");
  const password = Joi.string().min(3).max(30).required().label("Password");

  const schema = Joi.object({
    username: username,
    password: password,
  });

  return (
    <Container>
      <Image />
      {userName ? (
          <LogOut />
      ) : (
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
      )}
    </Container>
  );
};
export default Login;
