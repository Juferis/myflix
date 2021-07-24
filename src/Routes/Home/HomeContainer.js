import { moviesApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

// eslint-disable-next-line
export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  // api가져오기, error처리 등 로직들
  async componentDidMount() {
    try {
      // nowPlaying안에 data 안에 results가 있다. console.log()확인시
      const {
        data: { results: nowPlaying }, // 혼란을 피하기 위해 각각의 이름으로 설정
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      this.setState({
        // React.Componet부분의 state에 null대신 각각 받아온 데이터를 넣어준다
        nowPlaying,
        upcoming,
        popular,
      });
    } catch {
      this.setState({
        error: "영화를 가져올 수 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
