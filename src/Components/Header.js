import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

// 이 방식을 이용하면 클래스명이 겹치지 않는다.
const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(20, 20, 20, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#E50914" : "transparent")};
  transition: border-bottom 0.2s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// eslint-disable-next-line
const Headers = (
  { location: { pathname } } // loaction: { pathname } props를 console.log하면 나오는 오브젝트의 값이다.
) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);
// withRouter은 현재 라우터의 위치를 알 수 있게 도와준다.
export default withRouter(Headers);
