$(document).ready(function() {
  $("body").on("click", "#signup", function(event){
    event.preventDefault();
    var $target = $(event.target);
    $.ajax({
      type: "GET",
      url: "/signup",
    }).done(function(response){
      $(".container").replaceWith(response);
    });
  });

  $("body").on("click", "#login", function(event){
    event.preventDefault();
    var $target = $(event.target);
    $.ajax({
      type: "GET",
      url: "/",
    }).done(function(response){
      $(".container").replaceWith(response);
    });
  });

  $(".edit_comment_link").click(function(event){
    var $this = $(this);
    event.preventDefault();
    $this.hide();
    $this.siblings(".edit_form_div").css('display','block');
  });

  $(".add_comment_button").click(function(event){
    event.preventDefault();
    var $target = $(event.target);
    $target.hide();
    $(".comment_form").css('display','block');
  });

 $('#comment_block').on('submit', '.comment_form form', function(event) {
    event.preventDefault();
    var $form = $(this);
    console.log($form);
    $.ajax({
      type: "POST",
      url: $form.attr('action'),
      data: $form.serialize()
    }).done(function(response){
      console.log(response);
      $('.userComments').append(response);
    });
  });

});
