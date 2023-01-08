import Input from "./Input";
import styled from "styled-components";
import Buttons from "./Buttons";
import { toast } from "react-toastify";
import { useShoppingContext } from "./../products/ShopContext";
import Center from "./../../common/Center";

const Container = styled(Center)`
  text-align: left;
  width: 50%;
  animation: animate 0.3s ease-in;

  @keyframes animate {
    0% {
      opacity: 0;
      transform: scale(1) translateY(20px) translateX(0px) rotate(0);
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 60em) {
    width: 80%;
  }
`;
const FormBox = styled.form`
  width: 50%;
  @media (max-width: 600px) {
    width: 80%;
  }
`;
const LoginHeader = styled.h2`
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
`;

interface LoginProps {
  username: string;
  password: string;
}

interface FormProps {
  username: string;
  usernameErrors: string;
  password: string;
  passwordErrors: string;
  account: LoginProps;
  setAccount: React.Dispatch<React.SetStateAction<LoginProps>>;
  errors: LoginProps;
  setErrors: React.Dispatch<React.SetStateAction<LoginProps>>;
  schema: any;
}
const Form = ({
  username,
  usernameErrors,
  password,
  passwordErrors,
  account,
  setAccount,
  schema,
  setErrors,
  errors,
}: FormProps) => {
  const { setUsername } = useShoppingContext();
  const Joi = require("joi");

  const validate = () => {
    const result = schema.validate(account);
    if (!result.error) return null;
    const validateErrors = {} as any;
    for (let item of result.error.details)
      validateErrors[item.path[0]] = item.message;
    return validateErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // function that prevents full page reload
    e.preventDefault();
    const submitErrors = validate();
    setErrors(submitErrors || {});
    if (submitErrors) return;
    toast.info("You can edit forum now! :)");

    setUsername(username);
  };

  const validateProperty = ({
    name,
    value,
  }: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => {
    //Computed Property Name in JavaScript
    const obj = { [name]: value };
    const rule = schema.extract(name);
    const propertySchema = Joi.object({ [name]: rule });
    const { error } = propertySchema.validate(obj);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({
    currentTarget: input,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const validateErrors: any = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) {
      validateErrors[input.name] = errorMessage;
    } else {
      delete validateErrors[input.name];
    }
    const newMessage: any = { ...account };
    newMessage[input.name] = input.value;
    setAccount(newMessage);
    setErrors(validateErrors);
  };

  return (
    <Container>
      <FormBox onSubmit={handleSubmit}>
        <LoginHeader>Login</LoginHeader>
        <Input
          name="username"
          value={username}
          label="Username"
          onChange={handleChange}
          type="text"
          error={usernameErrors}
          autoFocus={true}
        />
        <Input
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
          type="password"
          error={passwordErrors}
          autoFocus={false}
        />
        <Buttons />
      </FormBox>
    </Container>
  );
};
export default Form;
