import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="ui embed">
                <iframe
                    src={"https://www.youtube.com/embed/" + video.id.videoId}
                    title="Video Player"
                    frameborder="0"
                    allowfullscreen
                />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>

                <div className="description">{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
