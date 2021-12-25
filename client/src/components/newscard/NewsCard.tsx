import React from "react";
import styled from "styled-components";
import placeholder from "../../images/placeholder.jpeg";

interface PostCard {
  name: string;
  description: string;
  image: {
    thumbnail: {
      contentUrl: string;
    };
  };
  url: string;
}

const NewsCard = ({ name, description, image, url }: PostCard) => {
  return (
    <Card>
      <div style={{ alignItems: "start" }}>
        {" "}
        <img
          src={
            image ? `${image?.thumbnail.contentUrl.slice(0, -9)}` : placeholder
          }
          style={{ width: "300px", height: "200px" }}
          alt="trending news"
        ></img>
      </div>
      {console.log(image?.thumbnail.contentUrl)}
      <Title>
        <Slink href={`${url}`}>{name.slice(0, 55)} ...</Slink>
      </Title>
      <p>{description.slice(0, 200)} ...</p>

      <Button>Read more...</Button>
    </Card>
  );
};

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  display: inline-block;
  margin: 10px;
`;

const Title = styled.h3`
  color: grey;
  font-size: 1.2rem;
`;

const Button = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
`;

const Slink = styled.a`
  color: coral;
  font-weight: bold;
  text-decoration: none;
  &:hover {
      background: orange;
      color: black;
    }
`;

export default NewsCard;
