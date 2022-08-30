import { useState, useEffect } from "react";
import styled from "styled-components";
import http from "../../services/httpService";
import config from "../../services/config.json";
import Topics from "./Topics";
import Comments from "./Comments";
import ActualTopic from "./ActualTopic";
import "../../style.css";

const CommunitySection = styled.div`
  margin: 5rem 0 1rem 0;
  display: flex;
  margin-inline: auto;
  width: min(1310px, 100%);
  font-family: var(--ff-body);
`;

const CommentsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function GetApiComments() {
  const [photos, setPhotos] = useState();
  const [topics, setTopics] = useState([]);
  const [comments, setComments] = useState();

  let numberOfTopics = 5,
    numberOfComments = numberOfTopics * 5;

  const ApiTopics = async () => {
    const { data: topics } = await http.get(config.apiTopics);
    setTopics(topics.slice(0, numberOfTopics));
  };

  const ApiPhotos = async () => {
    const { data: photos } = await http.get(config.apiPhotos);
    setPhotos(photos.slice(0, numberOfComments));
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
    ApiPhotos();
    ApiComments();
  }, []);

  const handleAdd = async () => {
    const obj = {
      postId: 5,
      id: 26,
      name: "text",
      email: "user name",
      body: "user comment",
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
    const orginalPhotos = photos;
    const filteredPhotos = photos.filter((p) => p.id !== comment.id);
    setPhotos(filteredPhotos);
    try {
      await http.delete(config.apiComments + "/" + comment.id);
      await http.delete(config.apiPhotos + "/" + comment.id);
    } catch (er) {
      if (er.response && er.response.status === 404)
        alert("This post has already been deleted");
      setActualComments(orginalComments);
      setPhotos(orginalPhotos);
    }
  };
  const [actualTopic, setActualTopic] = useState([]);
  const [actualComments, setActualComments] = useState();

  function onPageChange(topic, index) {
    setActualComments(comments.slice(index * 5, index * 5 + 5));
    setActualTopic(topic.title);
  }
  return (
    <CommunitySection>
      <Topics topics={topics} onPageChange={onPageChange} />
      <CommentsSection className="fs-body">
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