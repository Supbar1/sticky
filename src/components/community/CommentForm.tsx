import styled from "styled-components";
import { SmallOrangeButton as OrangeButton } from "../../common/OrangeButtons";
import { useShoppingContext } from "./../products/ShopContext";

const Container = styled.div`
  align-items: center;
  text-align: left;
  width: 100%;
`;
const UserName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  span {
    color: var(--clr-accent-400);
  }
`;
const UserIcon = styled.i`
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 60em) {
    display: none;
  }
`;
const NewComment = styled.form`
  display: flex;
  align-items: center;
  margin: 2rem;
  width: 100%;
  @media (max-width: 60em) {
    flex-direction: column;
  }
`;
const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: var(--fs-300);
  width: 100%;
  @media (max-width: 60em) {
    margin: 0.5rem 0;
    height: 180px;
  }
`;
interface CommentFormProps {
  text: string;
  onSubmit: (event: any) => Promise<void>;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}
const CommentForm = ({ text, onSubmit, onChange }: CommentFormProps) => {
  const { userName } = useShoppingContext();
  let isTextareaDisabled = text.length > 0 && userName;
  return (
    <Container
      style={userName ? { display: "flex" } : { display: "none" }}
    >
      <UserName>
        <UserIcon className="fa-solid fa-circle-user" />
      </UserName>
      <NewComment onSubmit={onSubmit}>
        <Textarea value={text} onChange={onChange} />
        <OrangeButton  isTextareaDisabled={!isTextareaDisabled}>
          Add comment
        </OrangeButton>
      </NewComment>
    </Container>
  );
};

export default CommentForm;
