import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "35ce49283e2872357cabe4903e2b15c0",
    language: "ko-KR",
  },
});

api.get("tv/popular"); // /tv/popular같은 절대경로 쓰지 말것 상대경로 쓰기

export default api;
