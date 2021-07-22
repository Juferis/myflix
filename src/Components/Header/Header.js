import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 이 방식을 이용하면 클래스명이 겹치지 않는다.
const Header = styled.header``;
const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;
const Item = styled.li``;
const SLink = styled(Link)``;
// eslint-disable-next-line
export default () => (
  <Header>
    <List>
      <Item>
        <SLink href="/">Home</SLink>
      </Item>
      <Item>
        <SLink href="/#/tv">TV</SLink>
      </Item>
      <Item>
        <SLink href="/#/search">Search</SLink>
      </Item>
    </List>
  </Header>
);
