(function($) {

  // fire different events based on url
  sk_GLOBAL.url_events_router = (function() {

    // get the url
    var url = $.url(),
        path = url.attr('path'),
        url_segments = path.split('/'),
        url_ready_name = '';

    console.log('the path is ' + path);


  }());

}(jQuery));