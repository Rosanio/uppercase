$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var messageInput = $('input#input_m').val().toUpperCase();

    $('.rtrn').text(messageInput);

    $('#message').show();

    event.preventDefault();
  });
});
