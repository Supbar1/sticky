import styled from "styled-components";
import OrangeButton from "../../common/OrangeButtons";
import { useShoppingContext } from "../products/ShopContext";

const Container = styled.div`
  align-items: center;
  text-align: left;
  width: 100%;
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
  justify-content: center;
  width: 100%;
  @media (max-width: 60em) {
    flex-direction: column;
  }
`;
const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: var(--fs-300);
  width: 100%;
  margin: 0 1rem;

  @media (max-width: 60em) {
    margin: 1rem 0;
    height: 180px;
  }
`;
const AddCommentButton = styled(OrangeButton)`
  font-size: var(--fs-400);
  padding: 0.75em 1.5em;
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
    <Container style={userName ? { display: "flex" } : { display: "none" }}>
      <NewComment onSubmit={onSubmit}>
        <UserIcon className="fa-solid fa-circle-user" />
        <Textarea value={text} onChange={onChange} />
        <AddCommentButton disabled={!isTextareaDisabled}>
          Add comment
        </AddCommentButton>
      </NewComment>
    </Container>
  );
};

export default CommentForm;
