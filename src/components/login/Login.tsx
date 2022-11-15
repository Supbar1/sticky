import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useShoppingContext } from "../products/ShopContext";
import Form from "./Form";
import Image from "./Image";
import LogOut from "./LogOut";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
interface AcountProps {
  username: string;
  password: string;
}

const Login = () => {
  const Joi = require(`joi`);
  const { setUsername, userName } = useShoppingContext();
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
