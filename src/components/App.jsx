class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    // props.searchYouTube({ key: YOUTUBE_API_KEY, query: '', max: 5 }, () => {});
  }

  componentDidMount() {
    this.onYouTubeSearch('dogs');
  }

  changeVideoOnClick(newVideo) {
    this.setState({
      currentVideo: newVideo
    });
  }

  onYouTubeSearch(query) {
    var options = { 
      key: this.props.APIKey,
      query: query,
      max: 5 
    };

    this.props.searchYouTube (options, (videoData) =>
      this.setState({
        videos: videoData,
        currentVideo: videoData[0]
      })
    );
  }

  render() {
    return (
      <div>
        <Nav onYouTubeSearch={this.onYouTubeSearch.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} changeVideoOnClick={this.changeVideoOnClick.bind(this)} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
