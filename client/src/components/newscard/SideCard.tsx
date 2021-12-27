import React from "react";
import styled from "styled-components";

interface TopNews {
  name: string;
  key: string,
}
const SideCard = ({ name, key }: TopNews) => {
  return (
    <div>
      <Bullet>{key} {name}</Bullet>
    </div>
  );
};

const Bullet = styled.li`
    font-weight: bold;
    font-size: 1,2rem;
    font-color: orange;
    margin-bottom: 20px;
`

export default SideCard;
