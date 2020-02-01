import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import Youtube from "../apis/Youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onFormSubmit = async Term => {
    const response = await Youtube.get("/search", { params: { q: Term } });
    let videos = response.data.items;
    const videoMap = video => {
      if (video.id.kind === "youtube#video") {
        return video;
      }
    };
    videos = videos.map(videoMap);
    this.setState({
      videos,
      selectedVideo: videos[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount = () => {
    this.onFormSubmit("music video");
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
