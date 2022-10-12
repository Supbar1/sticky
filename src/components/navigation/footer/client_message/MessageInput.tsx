import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputBox = styled.div`
  margin-bottom: 5px;
  color: #607d8d;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: var(--fs-body);
  @media (max-width: 60em) {
    font-size: var(--fs-400);
  }
  input,
  textarea {
    margin: 5px 0;
    width: 100%;
    padding: 10px 20px;
    font-weight: 400;
    border: 1px solid var(--clr-primary-400);
    letter-spacing: 1px;
    color: var(--clr-primary-400);
    background: transparent;
  }
  textarea {
    height: 8rem;
    overflow: hidden;
  }
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
  label: string;
  error: string;
  type: string;
  placeholder: string;
  value: number;
  onChange: () => void;
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
      <input
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

export const Textarea = ({
  name,
  value,
  error,
  onChange,
  type,
  placeholder,
}: InputProps) => {
  return (
    <Container>
      <InputBox>
        <textarea
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
};
