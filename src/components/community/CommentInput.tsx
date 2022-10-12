import styled from "styled-components";

const Column = styled.div`
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

interface InputProps {
  name: string;
  label: string;
  value: number;
  onChange: () => void;
}
const Input = ({ name, label, value, onChange }: InputProps) => (
  <Column>
    <InputBox>
      <label htmlFor={name}>{label}</label>
      <textarea value={value} onChange={onChange} id={name} name={name} />
    </InputBox>
  </Column>
);

export default Input;
