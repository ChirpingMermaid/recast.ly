class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textVal: ""
    };
  }

  handleTextInput(text) {
    this.setState({
      textVal: text
    });
  }

  handleEnterKey(target) {
    if(target.charCode===13) {
      this.props.onYouTubeSearch(this.state.textVal);
    }
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onKeyPress={(target) => this.handleEnterKey(target)} onChange={ (e) => this.handleTextInput(e.target.value)} />
        <button className="btn hidden-sm-down" onClick={() => this.props.onYouTubeSearch(this.state.textVal) }>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
};


//<input className="form-control" type="text" onChange={ (e) => props.onYouTubeSearch(e.target.value) } />
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
