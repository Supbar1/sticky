import styled from "styled-components";
import { useShoppingContext } from "../products/ShopContext";

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "img userName"
    "buttons commentText";
  grid-template-columns: 1fr 8fr;
  grid-template-rows: 1fr 2fr;
  text-align: left;
  width: 100%;
  i {
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 60em) {
    margin: 0.5rem;
  }
`;
const User = styled.p`
  grid-area: userName;
  margin: 1rem;
  span {
    color: var(--clr-accent-400);
  }
  @media (max-width: 60em) {
    margin: 0.5rem;
  }
`;
const Text = styled.p`
  grid-area: commentText;
  align-items: center;
  justify-content: left;
  text-align: left;
  margin: 1rem;
  @media (max-width: 60em) {
    margin: 0.5rem;
  }
`;
const ButtonsBox = styled.div`
  grid-area: buttons;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const Button = styled.button`
  font-size: var(--fs-300);
  margin: 5px;
  border: none;
  color: var(--clr-accent-200);
  background-color: var(--clr-neutral-100);
`;

interface CommentType {
  readonly postId: number;
  readonly id: number;
  name: string;
  email: string;
  body: string;
}

interface InputProps {
  handleUpdate: (comment: CommentType) => void;
  handleDelete: (comment: CommentType) => void;
  comment: CommentType;
  key: number;
}

const Comment = ({ comment, handleUpdate, handleDelete }: InputProps) => {
  const { isLoggedIn } = useShoppingContext();
  return (
    <Container key={comment.id}>
      <i className="fa-solid fa-circle-user"></i>
      <User>
        user:
        <span>&nbsp; {comment.email}</span>
      </User>
      <Text>{comment.body}</Text>

      <ButtonsBox
        style={isLoggedIn === true ? { display: "flex" } : { display: "none" }}
      >
        <Button onClick={() => handleUpdate(comment)}>Update</Button>
        <Button onClick={() => handleDelete(comment)}>Delete</Button>
      </ButtonsBox>
    </Container>
  );
};
export default Comment;
