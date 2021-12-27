import React, { useState, useEffect } from "react";
import axios from "axios";
import MainNav from "../../components/navigation/MainNav";
import NewsCard from "../../components/newscard/NewsCard";
import styled from "styled-components";
import SideCard from "../../components/newscard/SideCard";

const CryptoNews = () => {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/posts")
      .then((res) => {
        setAllNews(res.data.posts);
        console.log(res.data.posts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <MainNav />
      <Container>
        <DivLeft>
          {allNews.map((post, key) => (
            <NewsCard {...post} key={key} />
          ))}
        </DivLeft>
        <DivRight>
            <h2>Recent 10 News</h2>
          <ol>
            {" "}
            {allNews.map((post, key) => (
              <SideCard {...post} key={key} />
            ))}
          </ol>
        </DivRight>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
`;
const DivLeft = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  flex: 70%;
`;

const DivRight = styled.div`
  background-color: dodgerblue;
  padding: 10px;
  flex: 30%;
`;

export default CryptoNews;
