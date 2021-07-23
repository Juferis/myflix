import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "35ce49283e2872357cabe4903e2b15c0",
    language: "ko-KR",
  },
});

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  search: (term) =>
    api.get("search/tv", {
      params: {
        // encodeURI하는 이유는 특수문자를 처리하기 위해 사용한다 %20, %21로 uri에 들어가기 때문
        query: encodeURIComponent(term),
      },
    }),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
};

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  search: (term) =>
    api.get("search/movie", {
      params: {
        // encodeURI하는 이유는 특수문자를 처리하기 위해 사용한다 %20, %21로 uri에 들어가기 때문
        query: encodeURIComponent(term),
      },
    }),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
};
