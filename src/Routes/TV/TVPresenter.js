// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
  padding: 0px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="최고 인기 작품">
          {topRated.map((tv) => tv.name)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="인기있는 작품">{popular.map((tv) => tv.name)}</Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="오늘 방송 작품">
          {airingToday.map((tv) => tv.name)}
        </Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
