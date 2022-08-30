import styled from "styled-components";
import "../../style.css";
const Comment = styled.div`
  text-align: left;
  width: 100%;
  img {
    width: 100px;
    border-radius: 100%;
  }
`;
const Text = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  text-align: left;
  padding: 2rem;
`;
export default function Comments({
  actualComments,
  handleUpdate,
  handleDelete,
  handleAdd,
  photos,
}) {
  return (
    <>
      {actualComments &&
        actualComments.map((comment, index) => (
          <Comment className="padding-block-500" key={index}>
            {/* This img's sometimes works, sometimes doesnt. Server issues. */}
            <img src={photos[index].thumbnailUrl} alt="sorry" />

            <Text> user: {comment.email}</Text>
            <Text> {comment.body}</Text>
            <button onClick={() => handleUpdate(comment)}>Update</button>
            <button onClick={() => handleDelete(comment, index)}>Delete</button>
          </Comment>
        ))}
      {actualComments && (
        <button onClick={() => handleAdd()}>Add Comment</button>
      )}
    </>
  );
}
