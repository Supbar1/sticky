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
  margin-left: 1rem;

  i {
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 57rem) {
    font-size: var(fs--300);
    i {
      font-size: 4rem;
    }
  }
`;
const User = styled.p`
  grid-area: userName;
`;
const Text = styled.p`
  grid-area: commentText;
  align-items: center;
  justify-content: left;
  text-align: left;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  button {
    font-size: var(--fs-300);
    margin: 5px;
    border: none;
  }
  @media (max-width: 57rem) {
    grid-area: buttons;
  }
`;
const AddComment = styled.button`
  border: none;
  transform: scale(1, 1.2);
  padding: 0.8rem;
  border-radius: 10%;
`;
export default function Comments({
  actualComments,
  handleUpdate,
  handleDelete,
  handleAdd,
}) {
  return (
    <>
      {actualComments &&
        actualComments.map((comment, index) => (
          <Comment className="small-margin" key={index}>
            <i className="fa-solid fa-circle-user"></i>

            <User className="small-margin">
              user:
              <span className="text-accent-400">&nbsp; {comment.email}</span>
            </User>
            <Text className="small-margin"> {comment.body}</Text>

            <Buttons className="fs-400">
              <button
                className="text-accent-200 bg-neutral-100"
                onClick={() => handleUpdate(comment)}
              >
                Update
              </button>
              <button
                className="text-accent-200 bg-neutral-100"
                onClick={() => handleDelete(comment, index)}
              >
                Delete
              </button>
            </Buttons>
          </Comment>
        ))}
      {actualComments && (
        <AddComment
          className="text-neutral-100 bg-accent-400 margin"
          onClick={() => handleAdd()}
        >
          Add Comment
        </AddComment>
      )}
    </>
  );
}
