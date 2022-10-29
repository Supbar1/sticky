import Input from "./Input";
import Buttons from "./Buttons";
import styled from "styled-components";

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
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
  schema,
  setErrors,
  errors,
  setAccount,
}: FormProps) => {
  const Joi = require(`joi`);

  const validate = () => {
    const result = Joi.validate(account, schema, { abortEarly: false });
    if (!result.error) return null;
    const validateErrors = {} as any;
    for (let item of result.error.details)
      validateErrors[item.path[0]] = item.message;

    return validateErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    // function that prevents full page reload
    e.preventDefault();
    const submitErrors = validate();
    setErrors(submitErrors || {});
    if (!errors) return;
  };

  const validateProperty = ({
    name,
    value,
  }: EventTarget & HTMLInputElement) => {
    const obj = { [name]: value };
    const rule = schema.extract(name);
    const propertySchema = Joi.object({ [name]: rule });
    const { error } = propertySchema.validate(obj);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({
    currentTarget: input,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const validateErrors: any = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) {
      validateErrors[input.name] = errorMessage;
    } else {
      delete validateErrors[input.name];
    }
    const newAccount: any = { ...account };
    newAccount[input.name] = input.value;
    setErrors(validateErrors);
    setAccount(newAccount);
  };

  return (
    <ContentBox>
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
    </ContentBox>
  );
};
export default Form;
