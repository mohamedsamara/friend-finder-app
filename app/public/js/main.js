$(document).ready(function() {
  $('.my-select').selectpicker('render');
  $('#alert-notification').hide();
});

var validateFormData = function() {
  var isFormValid = true;

  $('.input-form').each(function() {
    if ($(this).val() === '') {
      isFormValid = false;
    }
  });

  $('.selectpicker').each(function() {
    if ($(this).val() == 0) {
      isFormValid = false;
    }
  });

  return isFormValid;
};

$('#submit-survey').on('click', function(event) {
  event.preventDefault();

  if (validateFormData()) {
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
        $('#friend-name').html(response.name);
        $('#friend-photo').attr('src', response.photo);

        $('#friend-modal').modal('toggle');
      },
      error: function(err) {
        var message = '';
        $.each(err.responseJSON.error, function(i, error) {
          message += '* ' + error.msg + ' ';
        });

        $('.alert').append(message);

        $('#alert-notification')
          .fadeIn()
          .fadeOut(3000);
      }
    });
  } else {
    alert('Some data is required!!');
  }
});
