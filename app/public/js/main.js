$(document).ready(function() {
  $('.my-select').selectpicker('render');
});

$('#submit-survey').on('click', function(event) {
  event.preventDefault();

  var dataForm = {
    name: $('#name')
      .val()
      .trim(),
    photoLink: $('#photo-link')
      .val()
      .trim(),
    scores: [
      $('#q1')
        .val()
        .trim(),
      $('#q2')
        .val()
        .trim(),
      $('#q3')
        .val()
        .trim(),
      $('#q4')
        .val()
        .trim(),
      $('#q5')
        .val()
        .trim(),
      $('#q6')
        .val()
        .trim(),
      $('#q7')
        .val()
        .trim(),
      $('#q8')
        .val()
        .trim(),
      $('#q9')
        .val()
        .trim(),
      $('#q10')
        .val()
        .trim()
    ]
  };

  $.ajax({
    type: 'POST',
    url: '/api/friends',
    data: dataForm,
    success: function(response) {
      console.log('response', response);
    },
    error: function(err) {}
  });
});
