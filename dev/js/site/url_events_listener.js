(function($) {

  // fire different events based on url
  History.Adapter.bind(window, 'statechange', function() {

    var State = History.getState(),
        tokenized_url = State.hash.split('/'),
        url_ready_name = tokenized_url[2];

        console.log('the url ready name is ' + url_ready_name);

    // if the screen resolution is greater than 810px
    if (matchMedia('only screen and (min-width: 810px)').matches) {

      sk_GLOBAL.url_events_router(url_ready_name);

    }
    // end if the screen resolution is greater than 810px

  });

}(jQuery));