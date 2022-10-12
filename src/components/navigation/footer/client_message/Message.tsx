import { useState } from "react";
import styled from "styled-components";
import MessageForm from "./MessageForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--clr-neutral-100);
  color: var(--clr-neutral-900);
`;
const Header = styled.h2`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: max(300px, 50%);
  font-size: var(--fs-secondary-heading);
`;

interface MessageInterface {
  setIsMessageOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMessageOpen: boolean;
}
interface MessageType {
  Name_Surname?: string;
  email?: string;
  phone?: string;
  company?: string;
  userMessage?: string;
}
const Message = ({ setIsMessageOpen, isMessageOpen }: MessageInterface) => {
  const [message, setMessage] = useState<MessageType>({});
  const [messageErrors, setMessageErrors] = useState<MessageType>({});

  const Joi = require("joi");

  const nameSurnameSchema = Joi.string().min(3).max(30).required().messages({
    "string.pattern.base": `Name and surname is to short.`,
  });
  const phoneSchema = Joi.string()
    .regex(/^[0-9]{11}$/)
    .messages({
      "string.pattern.base": "Must contain 11 digits (with prefix)",
    })
    .required();
  const emailSchema = Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "pl"] },
    })
    .required();
  const companySchema = Joi.string().min(3).max(30);
  const userMessageSchema = Joi.string().min(3).max(1000).required();

  const schema = Joi.object({
    Name_Surname: nameSurnameSchema,
    email: emailSchema,
    phone: phoneSchema,
    company: companySchema,
    userMessage: userMessageSchema,
  });

  const doSubmit = () => {};

  return (
    <Container>
      <Header>
        Contact us
        <i
          className="fa-solid fa-xmark"
          onClick={() => setIsMessageOpen(!isMessageOpen)}
        ></i>
      </Header>
      <MessageForm
        doSubmit={doSubmit}
        message={message}
        setMessage={setMessage}
        Name_Surname={message.Name_Surname}
        nameSurnameErrors={messageErrors.Name_Surname}
        emailSchema={message.email}
        emailErrors={messageErrors.email}
        phone={message.phone}
        phoneErrors={messageErrors.phone}
        company={message.company}
        companyErrors={messageErrors.company}
        userMessage={message.userMessage}
        userMessageErrors={messageErrors.userMessage}
        schema={schema}
        errors={messageErrors}
        setErrors={setMessageErrors}
      />
    </Container>
  );
};
export default Message;
