(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //
  // variable with valid directions
  // test with valid and invalid responses
  // GET http://127.0.0.1:3000/
  // respond with random entry from directions array
  const swimCommandFetch = (direction) => {
    $.ajax({
      type: 'GET',
      data: direction,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: (response, status) => {
        console.log('Message Recieved!');
        console.log(response);
        SwimTeam.move(response);
      }
    });
  }

  $('body').on('keydown', (event) => {
    var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
    if (arrowPress) {
      var direction = arrowPress[1].toLowerCase();
      // SwimTeam.move(direction.toLowerCase());
      swimCommandFetch(direction);
    }
  });

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
