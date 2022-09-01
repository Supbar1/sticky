import { useState, useEffect } from "react";
import styled from "styled-components";
import http from "../../services/httpService";
import config from "../../services/config.json";
import ActualTopic from "./ActualTopic";
import Comments from "./Comments";
import Topics from "./Topics";
import "../../style.css";

const CommunitySection = styled.div`
  margin: 5rem 0 1rem 0;
  display: flex;
  margin-inline: auto;
  width: min(1310px, 100%);
  font-family: var(--ff-body);
  @media (max-width: 57rem) {
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
  @media (max-width: 57rem) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export default function GetApiComments() {
  const [topics, setTopics] = useState([]);
  const [comments, setComments] = useState();

  let numberOfTopics = 5,
    numberOfComments = numberOfTopics * 5;

  const ApiTopics = async () => {
    const { data: topics } = await http.get(config.apiTopics);
    setTopics(topics.slice(0, numberOfTopics));
  };

  const ApiComments = async () => {
    const { data: comments } = await http.get(config.apiComments);
    setComments(comments.slice(0, numberOfComments));
    for (let element of comments) {
      const nickEnd = element.email.indexOf("@");
      const nick = element.email.slice(0, nickEnd);
      element.email = nick;
    }
  };
  useEffect(() => {
    ApiTopics();
    ApiComments();
  }, []);

  const handleAdd = async () => {
    const obj = {
      postId: 5,
      id: 26,
      name: "text",
      email: "User_Name",
      body: "qui harum consequatur fugiat et eligendi perferendis at molestiae commodi ducimus doloremque asperiores numquam qui ut sit dignissimos reprehenderit tempore",
    };
    const newPosts = [...actualComments, obj];
    setActualComments(newPosts);
  };

  const handleUpdate = async (comment) => {
    comment.body = comment.body + " Updated";
    const commentsFromState = [...comments];
    commentsFromState[comments.indexOf(comment)] = { ...comment };
    setComments(commentsFromState);
    await http.put(config.apiComments + "/" + comment.id, comment);
  };

  const handleDelete = async (comment) => {
    const orginalComments = comments;
    const filteredComments = comments.filter((p) => p.id !== comment.id);
    setComments(filteredComments);
    const filteredActualComments = actualComments.filter(
      (p) => p.id !== comment.id
    );
    setActualComments(filteredActualComments);

    try {
      await http.delete(config.apiComments + "/" + comment.id);
    } catch (er) {
      if (er.response && er.response.status === 404)
        alert("This post has already been deleted");
      setActualComments(orginalComments);
    }
  };
  
  const [actualTopic, setActualTopic] = useState([]);
  const [actualComments, setActualComments] = useState();
  const [topicPicked, setTopicPicked] = useState(false);

  function onPageChange(topic, index) {
    setActualComments(comments.slice(index * 5, index * 5 + 5));
    setActualTopic(topic.title);
    setTopicPicked(true);
  }
  return (
    <CommunitySection>
      <Topics topics={topics} onPageChange={onPageChange} />
      <CommentsSection className="fs-body">
        <ActualTopic actualTopic={actualTopic} topicPicked={topicPicked} />
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
