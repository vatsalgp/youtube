import axios from "axios";

const KEY = "AIzaSyDC7hjCe9KujOoFlDlJZuoMenXrXw-yRto";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 7,
    key: KEY
  }
});
