$(document).ready(function() {
  $('.my-select').selectpicker();

  $(document).on('change', '.selectpicker', function() {
    var id = $(this).attr('id');

    console.log('id', id);
  });
});
