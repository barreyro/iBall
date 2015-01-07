$(document).ready(function() {
  $('loginLink').on('click', '.loginForm', function(event){
    event.preventDefault();
    console.log(event.target);
    $form = $(event.target);
    $ajax({
      type: $form.attr('method')
      url: $form.attr('action')
      data: $form.serialize()
    }).done(function(response) {
      $form.
    })
    })
  })
});
