// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && // nowPlaying에 데이터가 있는지 검사
        nowPlaying.length > 0 && (
          <Section title="현재 상영중">
            {nowPlaying.map((movie) => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
      {popular && popular.length > 0 && (
        <Section title="인기 콘텐츠">
          {popular.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="곧 개봉작">
          {upcoming.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
