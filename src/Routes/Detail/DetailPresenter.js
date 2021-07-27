// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px); // -50px는 네비게이션바의 마진 크기를 빼는 것
  width: 100%;
  position: relative;
  padding: 50px;
`;

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  z-index: 1;
`;
const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 35px;
`;

const InfoContainer = styled.div`
  margin-bottom: 10px 0;
`;

const Info = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

// backdrop_path
// Detail을 위해 영화나 TV를 누르면 가는 Detail 창에서 개발자 창을 통해 받아오는 데이터를 확인하면 나온다.
const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <BackDrop
        bgImage={`https://image.tmdb.org/t/p/original${result?.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result?.poster_path
              ? `https://image.tmdb.org/t/p/original${result?.poster_path}`
              : require("../../assets/no_image.png")
          }
        />
        <Data>
          <Title>{result?.title ? result.title : result?.name}</Title>
          <InfoContainer>
            <Info>
              {result?.release_date
                ? result.release_date.substring(0, 4)
                : result?.first_air_date.substring(0, 4)}
            </Info>
            <Divider>•</Divider>
            <Info>
              {result?.runtime ? result?.runtime : result?.episode_run_time[0]}
              {" 분"}
            </Info>
            <Divider>•</Divider>
            <Info>
              {result?.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Info>
            <Divider>•</Divider>
            <Info>
              {"평점 : "}
              {result?.vote_average}
            </Info>
          </InfoContainer>
          <Overview>{result?.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
