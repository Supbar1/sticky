import { useState } from "react";
import styled from "styled-components";
import CloseMark from "./CloseMark";
import MessageForm from "./MessageForm";

import { toast } from "react-toastify";
import Center from "./../../../../common/Center";

const Container = styled(Center)`
  background-color: var(--clr-neutral-100);
  color: var(--clr-neutral-900);
`;
const Header = styled.h2`
  width: max(300px, 40%);
  display: flex;
  justify-content: space-between;

  margin: 1rem 0;
  font-size: var(--fs-secondary-heading);
`;

interface MessageInterface {
  setIsMessageOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMessageOpen: boolean;
}
interface MessageType {
  nameSurname?: string;
  email?: string;
  phone?: string;
  company?: string;
  userMessage?: string;
}
const Message = ({ setIsMessageOpen, isMessageOpen }: MessageInterface) => {
  const [message, setMessage] = useState<MessageType>({
    nameSurname: "",
    email: "",
    phone: "",
    company: "",
    userMessage: "",
  } as MessageType);

  const [messageErrors, setMessageErrors] = useState<MessageType>({
    nameSurname: "",
    email: "",
    phone: "",
    company: "",
    userMessage: "",
  } as MessageType);

  const Joi = require("joi");

  const nameSurnameSchema = Joi.string().min(3).max(30).required().messages({
    "string.pattern.base": `Name and surname is to short.`,
  });
  const phoneSchema = Joi.string()
    .regex(/^[0-9]{9}$/)
    .required()
    .allow("")
    .messages({
      "string.pattern.base": "Must contain 9 digits",
    });
  const emailSchema = Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "pl"] },
    });
  const companySchema = Joi.string().min(3).max(30).optional().allow("");
  const userMessageSchema = Joi.string().min(3).max(1000).required();

  const schema = Joi.object({
    nameSurname: nameSurnameSchema,
    email: emailSchema,
    phone: phoneSchema,
    company: companySchema || null,
    userMessage: userMessageSchema,
  });

  const doSubmit = () => {
    setIsMessageOpen(state=>!state);
    toast.info("Message send :)");
  };

  if (!isMessageOpen) return null;

  return (
    <Container>
      <Header>
        Contact us
        <CloseMark openMenu={() => setIsMessageOpen(state=>!state)} />
      </Header>
      <MessageForm
        doSubmit={doSubmit}
        schema={schema}
        message={message}
        setMessage={setMessage}
        errors={messageErrors}
        setErrors={setMessageErrors}
        nameSurname={message.nameSurname}
        nameSurnameErrors={messageErrors.nameSurname}
        email={message.email}
        emailErrors={messageErrors.email}
        phone={message.phone}
        phoneErrors={messageErrors.phone}
        company={message.company}
        companyErrors={messageErrors.company}
        userMessage={message.userMessage}
        userMessageErrors={messageErrors.userMessage}
      />
    </Container>
  );
};
export default Message;
