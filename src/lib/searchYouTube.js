var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: { key: options.key,
            q: options.query,
            maxResults: options.max,
            type: 'video', 
            part: 'snippet',
            videoEmbeddable: 'true'},
    success: function(results) {
      if (callback) {
        callback(results.items);
      }
    },
    error: function(error) {
      console.log('error!');
    }
  });
};

window.searchYouTube = searchYouTube;
