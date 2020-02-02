import axios from "axios";

const KEY = "AIzaSyBJkIV_5R7o-Vf7PHY5wcr1HK3-6lqU0Uc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 7,
    key: KEY
  }
});
