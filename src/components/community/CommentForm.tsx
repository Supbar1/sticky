import styled from "styled-components";
import { SmallOrangeButton } from "../../common/OrangeButtons";

const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  i {
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 60em) {
  }
`;
const NewComment = styled.form`
  display: flex;
  width: 100%;
  @media (max-width: 60em) {
    flex-direction: column;
    margin: 0.5rem 0;
  }
`;
const UserName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  span {
    line-height: normal;
    color: var(--clr-accent-400);
  }
  @media (max-width: 60em) {
    i {
      font-size: 2rem;
    }
  }
`;
const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: var(--fs-300);
  width: 100%;
  @media (max-width: 60em) {
    margin: 0.5rem 0;
    height: 200px;
  }
`;
interface CommentFormType {
  text: string;
  onSubmit: (event: any) => Promise<void>;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}
const CommentForm = ({ text, onSubmit, onChange }: CommentFormType) => {
  let isTextareaDisabled = text.length > 0;
  return (
    <Container>
      <UserName>
        <i className="fa-solid fa-circle-user"></i>
        user:<span>&nbsp; Bartosz</span>
      </UserName>
      <NewComment onSubmit={onSubmit}>
        <Textarea value={text} onChange={onChange} />
        <SmallOrangeButton isTextareaDisabled={!isTextareaDisabled}>
          Add comment
        </SmallOrangeButton>
      </NewComment>
    </Container>
  );
};

export default CommentForm;
