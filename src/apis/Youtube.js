import axios from "axios";

const KEY = "AIzaSyDiryAn2O_lrv_bBwZlBbuaxAiF9yWTjj0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
});
