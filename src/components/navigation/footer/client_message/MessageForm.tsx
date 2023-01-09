import { useState } from "react";
import Input, { Textarea } from "./MessageInput";
import styled from "styled-components";
import OrangeButton from "./../../../../common/OrangeButtons";

const Container = styled.form`
  width: max(300px, 40%);
`;
const AcceptPermission = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 0.6rem;
  input {
    margin-right: 0.5rem;
  }
`;
const Button = styled(OrangeButton)`
  margin: 2rem;
  @media (max-width: 60em) {
    margin: 1rem;
  }
`;

interface MessageType {
  nameSurname?: string;
  email?: string;
  phone?: string;
  company?: string;
  userMessage?: string;
}

interface MessageProps {
  doSubmit: () => void;
  schema: any;
  message: MessageType;
  setMessage: React.Dispatch<React.SetStateAction<MessageType>>;
  errors: MessageType;
  setErrors: React.Dispatch<React.SetStateAction<MessageType>>;
  nameSurname?: string;
  nameSurnameErrors?: string;
  email?: string;
  emailErrors?: string;
  phone?: string;
  phoneErrors?: string;
  company?: string;
  companyErrors?: string;
  userMessage?: string;
  userMessageErrors?: string;
}
const MessageForm = ({
  message,
  setMessage,
  nameSurname,
  nameSurnameErrors,
  email,
  emailErrors,
  phone,
  phoneErrors,
  company,
  companyErrors,
  userMessage,
  userMessageErrors,
  errors,
  setErrors,
  doSubmit,
  schema,
}: MessageProps) => {
  const [agree, setAgree] = useState<boolean>(true);
  const Joi = require("joi");

  const validate = () => {
    const result = schema.validate(message);
    if (!result.error) return null;
    const validateErrors = {} as any;
    for (let item of result.error.details)
      validateErrors[item.path[0]] = item.message;
    return validateErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitErrors = validate();
    setErrors(submitErrors || {});
    if (!errors) return;
    console.log(errors);
  };

  const validateProperty = ({
    name,
    value,
  }: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => {
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
    const newMessage: any = { ...message };
    newMessage[input.name] = input.value;
    setMessage(newMessage);
    setErrors(validateErrors);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        name="nameSurname"
        value={nameSurname}
        onChange={handleChange}
        type="text"
        error={nameSurnameErrors}
        placeholder="Name and Surname"
      />
      <Input
        name="email"
        value={email}
        onChange={handleChange}
        type="email"
        error={emailErrors}
        placeholder="E-mail adress"
      />
      <Input
        name="phone"
        value={phone}
        onChange={handleChange}
        type="text"
        error={phoneErrors}
        placeholder="Phone number (optional)"
      />
      <Input
        name="company"
        value={company}
        onChange={handleChange}
        type="text"
        error={companyErrors}
        placeholder="Name of company (optional)"
      />
      <Textarea
        name="userMessage"
        value={userMessage}
        type="text"
        onChange={handleChange}
        error={userMessageErrors}
        placeholder="Your message"
      />

      <AcceptPermission>
        <input type="checkbox" onChange={() => setAgree(state=>!state)} />I hereby give
        consent for my personal data included in the application to be processed
        for the purposes of the recruitment process in accordance with Art. 6
        paragraph 1 letter a of the Regulation of the European Parliament and of
        the Council (EU) 2016/679 of 27 April 2016 on the protection of natural
        persons with regard to the processing of personal data and on the free
        movement of such data, and repealing Directive 95/46/EC (General Data
        Protection Regulation).
      </AcceptPermission>

      <Button disabled={agree || validate()} onClick={() => doSubmit()}>
        Send Message
      </Button>
    </Container>
  );
};
export default MessageForm;
