import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputBox = styled.div`
  margin-bottom: 5px;
  color: var(--clr-primary-400);
  font-weight: 300;
  letter-spacing: 1px;
  font-size: var(--fs-body);
  @media (max-width: 60em) {
    font-size: var(--fs-400);
  }
`;
const TextareaStyled = styled.textarea`
  margin: 5px 0;
  width: 100%;
  padding: 10px 20px;
  font-weight: 400;
  border: 1px solid var(--clr-primary-400);
  letter-spacing: 1px;
  color: var(--clr-primary-400);
  background: transparent;
  height: 8rem;
  overflow: hidden;
`;
const InputStyled = styled.input`
  margin: 5px 0;
  width: 100%;
  padding: 10px 20px;
  font-weight: 400;
  border: 1px solid var(--clr-primary-400);
  letter-spacing: 1px;
  color: var(--clr-primary-400);
  background: transparent;
`;
const Alert = styled.div`
  height: 50px;
  background-color: var(--clr-accent-300);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--fs-400);
  @media (max-width: 60em) {
    font-size: var(--fs-300);
  }
`;
interface InputProps {
  name: string;
  error?: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export const Input = ({
  name,
  value,
  error,
  onChange,
  type,
  placeholder,
}: InputProps) => (
  <Container>
    <InputBox>
      <InputStyled
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {error && <Alert>{error}</Alert>}
    </InputBox>
  </Container>
);

export default Input;

interface TextAreaProps {
  name: string;
  error?: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}
export const Textarea = ({
  name,
  value,
  error,
  onChange,
  placeholder,
}: TextAreaProps) => (
  <Container>
    <InputBox>
      <TextareaStyled
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        placeholder={placeholder}
      />
      {error && <Alert>{error}</Alert>}
    </InputBox>
  </Container>
);
