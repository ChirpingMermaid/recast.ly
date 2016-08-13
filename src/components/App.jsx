class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentVideo: exampleVideoData[0]};
  }

  onAppClick(event) {
    // this.state.currentVideo = "";
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} onClickEvent={this.onAppClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

//<VideoPlayer video={exampleVideoData[0]}/>
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
