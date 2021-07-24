import React from "react";
import styled from "styled-components";
// 탭을 이동할때마다 데이터를 새로 받아오기에 화면이 비워졌다가 뜨는 문제 해결을 위함

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top: 20px;
`;

// aria-label="loading" 시각장애인을 위한 loading알림
// eslint-disable-next-line
export default () => (
  <Container>
    <span role="img" aria-label="loading">
      loading...
    </span>
  </Container>
);
