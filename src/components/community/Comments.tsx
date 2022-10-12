import CommentForm from "./Comment";

interface CommentType {
  readonly postId: number;
  readonly id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentProps {
  actualTopicComments: CommentType[];
  handleUpdate: (comment: CommentType) => void;
  handleDelete: (comment: CommentType) => void;
}

const Comments = ({
  actualTopicComments,
  handleUpdate,
  handleDelete,
}: CommentProps) => (
  <>
    {actualTopicComments &&
      actualTopicComments.map((comment:CommentType, index:number) => (
        <CommentForm
          key={index}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          comment={comment}
        />
      ))}
  </>
);

export default Comments;
