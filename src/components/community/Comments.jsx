import styled from "styled-components";
import "../../style.css";

const Comment = styled.div`
  display: grid;
  grid-template-areas:
    "img userName"
    "buttons commentText";
  grid-template-columns: 1fr 8fr;
  grid-template-rows: 1fr 2fr;
  text-align: left;
  margin: 1rem;

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
  span {
    color: var(--clr-accent-400);
  }
  margin: 1rem;
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
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  button {
    font-size: var(--fs-300);
    margin: 5px;
    border: none;
    color: var(--clr-accent-200);
    background-color: var(--clr-neutral-100);
  }
  @media (max-width: 60rem) {
    grid-area: buttons;
  }
`;
const AddComment = styled.button`
  border: none;
  transform: scale(1, 1.2);
  padding: 0.8rem;
  border-radius: 10%;
  color: var(--clr-neutral-100);
  background-color: var(--clr-accent-400);
`;

export default function Comments({
  actualComments,
  handleUpdate,
  handleDelete,
  handleAdd
}) {
  return (
    <>
      {actualComments &&
        actualComments.map((comment, index) => (
          <Comment key={index}>
            <i className="fa-solid fa-circle-user"></i>
            <User>
              user:
              <span>&nbsp; {comment.email}</span>
            </User>
            <Text>{comment.body}</Text>

            <Buttons>
              <button onClick={() => handleUpdate(comment)}>Update</button>
              <button onClick={() => handleDelete(comment, index)}>
                Delete
              </button>
            </Buttons>
          </Comment>
        ))}
      {actualComments && (
        <AddComment onClick={() => handleAdd()}>Add Comment</AddComment>
      )}
    </>
  );
}
