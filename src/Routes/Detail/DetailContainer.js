import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";
// eslint-disable-next-line
export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      loaction: { pathname },
    } = props; // movie검색인지 tv검색인지 알아야 한다.
    this.state = {
      result: null,
      error: null,
      loading: false,
      isMovie: pathname.includes("/movie/"), // includes문자열이 포함되어있는지 검사하고 true, false 반환
    };
  }

  async componentDidMount() {
    const {
      // 밑의 객체가 기억이 안나면 console.log(this.props) 해보기
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id); // id는 문자가 아닌 숫자여야 한다.
    if (isNaN(parsedId)) {
      return push("/"); // return을 해야 함수가 끝나면서 Home화면으로 넘어간다. 안쓰면 넘어가도 함수가 안끝난다.
    }
    let result = null;
    try {
      if (isMovie) {
        const request = await moviesApi.movieDetail(parsedId);
        result = request.data;
      } else {
        const request = await tvApi.showDetail(parsedId);
        result = request.data;
      }
    } catch {
      this.setState({ error: "정보를 불러올 수 없습니다." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
