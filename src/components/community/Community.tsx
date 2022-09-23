import { useState, useEffect } from "react";
import styled from "styled-components";
import http from "../../services/httpService";
import config from "../../services/config.json";
import ActualTopic from "./TopicHeading";
import Comments from "./Comments";
import Topics from "./Topics";
import "../../style.css";

const CommunitySection = styled.div`
  margin: 5rem 0 1rem 0;
  display: flex;
  margin-inline: auto;
  width: min(1310px, 100%);
  font-family: var(--ff-body);
  @media (max-width: 60rem) {
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
  @media (max-width: 60rem) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: var(--fs-300);
  }
`;

interface TopicType  {
  readonly userId: number;
  readonly id: number;
  title: string;
  completed: boolean;
};

interface CommentType  {
  readonly postId: number;
  readonly id: number;
  name: string;
  email: string;
  body: string;
};

 const GetApiComments=()=> {
  const [topics, setTopics] = useState<TopicType[]>([]);
  const [comments, setComments] = useState<CommentType[]>([]);

  let numberOfTopicsDisplayed = 5,
    numberOfCommentsDisplayed = numberOfTopicsDisplayed * 5;

  const apiTopics = async () => {
    const { data: topics } = await http.get(config.apiTopics);
    setTopics(topics.slice(0, numberOfTopicsDisplayed));
  };

  const apiComments = async () => {
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

  const handleAdd = async () => {
    const obj : CommentType= {
      postId: 5,
      id: 26,
      name: "text",
      email: "User_Name",
      body: "qui harum consequatur fugiat et eligendi perferendis at molestiae commodi ducimus doloremque asperiores numquam qui ut sit dignissimos reprehenderit tempore",
    };
    const newPosts = [...actualComments, obj];
    setActualComments(newPosts);
  };

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
    const filteredActualComments = actualComments.filter(
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
  const [actualComments, setActualComments] = useState<CommentType[]>([]);

  const onPageChange=(topic: TopicType) =>{
    setActualComments(comments.slice((topic.id - 1) * 5, (topic.id-1) * 5  + 5));
    setActualTopic(topic.title);
  }

  return (
    <CommunitySection>
      <Topics topics={topics} onPageChange={onPageChange} />
      <CommentsSection>
        <ActualTopic actualTopic={actualTopic} />
        <Comments
          actualComments={actualComments}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
        />
      </CommentsSection>
    </CommunitySection>
  );
}
export default GetApiComments