import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputBox = styled.div`
  margin-bottom: 5px;
  display: inline-block;
  color: #607d8d;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: var(--fs-body);
  @media (max-width: 60em) {
    font-size: var(--fs-400);
  }
  input {
    width: 100%;
    padding: 10px 20px;
    outline: none;
    font-weight: 400;
    border: 1px solid #607d8b;
    letter-spacing: 1px;
    color: #607d8b;
    background: transparent;
    border-radius: 30px;
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
const Input = ({
  name,
  label,
  value,
  error,
  onChange,
  type,
  placeholder,
}: InputProps) => (
  <Container>
    <InputBox>
      <label htmlFor={name}>{label}</label>
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
