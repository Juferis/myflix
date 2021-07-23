import React from "react";
import SearchPresenter from "./SearchPresenter";

// eslint-disable-next-line
export default class extends React.Component {
  state = {
    // searchTerm은 현재 비어있지만 검색하고 enter누르면 로딩이 true가 되고 그 결과값을 넣는다.
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };
  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
      />
    );
  }
}
