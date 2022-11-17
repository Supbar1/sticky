import { useState, useEffect } from "react";
import styled from "styled-components";
import http from "../../services/httpService";
import config from "../../services/config.json";
import ActualTopic from "./ActualTopic";
import Topics from "./Topics";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { useShoppingContext } from "../products/ShopContext";

const Container = styled.div`
  min-height: 90vh;
  margin: 5rem 0 1rem 0;
  display: flex;
  margin-inline: auto;
  width: min(1310px, 100%);
  font-family: var(--ff-body);
  overflow: hidden;
  @media (max-width: 60em) {
    margin: 1rem 0;
    flex-direction: column;
    font-size: var(fs--300);
    i {
      font-size: 2rem;
    }
  }
`;

const CommentsSection = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  font-size: var(--fs-body);
  overflow: hidden;
  @media (max-width: 60em) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: var(--fs-300);
  }
`;
interface TopicType {
  readonly userId: number;
  readonly id: number;
  title: string;
  completed: boolean;
}

interface CommentType {
  readonly postId: number;
  readonly id: number;
  name: string;
  email: string;
  body: string;
}

const Forum = () => {
  const [topics, setTopics] = useState<TopicType[]>([]);
  const [comments, setComments] = useState<CommentType[]>([]);
  const { userName } = useShoppingContext();

  const numberOfTopicsDisplayed = 5;
  const numberOfCommentsDisplayed = numberOfTopicsDisplayed * 5;

  const apiTopics = async (): Promise<any> => {
    const { data: topics } = await http.get(config.apiTopics);
    setTopics(topics.slice(0, numberOfTopicsDisplayed));
  };

  const apiComments = async (): Promise<any> => {
    const { data: comments } = await http.get(config.apiComments);
    setComments(comments.slice(0, numberOfCommentsDisplayed));
    for (let element of comments) {
      const nickEnd = element.email.indexOf("@");
      const nick = element.email.slice(0, nickEnd);
      element.email = nick;
    }
  };
  useEffect(() => {
    apiTopics();
    apiComments();
  }, []);

  const handleUpdate = async (comment: CommentType) => {
    comment.body = comment.body + " Updated";
    const commentsFromState = [...comments];
    commentsFromState[comments.indexOf(comment)] = { ...comment };
    setComments(commentsFromState);
    await http.put(config.apiComments + "/" + comment.id, comment);
  };

  const handleDelete = async (comment: CommentType) => {
    const orginalComments = comments;
    const filteredComments = comments.filter((p) => p.id !== comment.id);
    setComments(filteredComments);
    const filteredActualComments = actualTopicComments.filter(
      (p) => p.id !== comment.id
    );
    setActualComments(filteredActualComments);
    try {
      await http.delete(config.apiComments + "/" + comment.id);
    } catch (er: any) {
      if (er.response && er.response.status === 404)
        alert("This post has already been deleted");
      setActualComments(orginalComments);
    }
  };

  const [actualTopic, setActualTopic] = useState<string>("");
  const [actualTopicComments, setActualComments] = useState<CommentType[]>([]);

  const onPageChange = (topic: TopicType) => {
    setActualComments(
      comments.slice((topic.id - 1) * 5, (topic.id - 1) * 5 + 5)
    );
    setActualTopic(topic.title);
  };
  const [text, setText] = useState<string>("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const obj: CommentType = {
      postId: 6,
      id: actualTopicComments.length,
      name: "text",
      email: userName,
      body: text,
    };
    const newPosts = [...actualTopicComments, obj];
    setActualComments(newPosts);
    setText("");
    const { data } = await http.post(config.apiComments, obj);
    return data;
  };

  return (
    <Container>
      <Topics topics={topics} onPageChange={onPageChange} />
      <CommentsSection>
        <ActualTopic actualTopic={actualTopic} />
        {actualTopicComments &&
          actualTopicComments.map((comment: CommentType, index: number) => (
            <Comment
              key={index}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              comment={comment}
            />
          ))}
        {actualTopic && (
          <CommentForm
            text={text}
            onSubmit={onSubmit}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setText(e.target.value)
            }
          />
        )}
      </CommentsSection>
    </Container>
  );
};
export default Forum;
