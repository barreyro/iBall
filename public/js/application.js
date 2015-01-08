$(document).ready(function() {
  $("body").on("click", "#signup", function(event){
    event.preventDefault();
    $target = $(event.target);
    $.ajax({
      type: "GET",
      url: "/signup",
    }).done(function(response){
      $(".container").replaceWith(response);
    })
  })

  $("body").on("click", "#login", function(event){
    event.preventDefault();
    $target = $(event.target);
    $.ajax({
      type: "GET",
      url: "/",
    }).done(function(response){
      $(".container").replaceWith(response);
    })
  })

  $(".edit_comment_link").click(function(event){
    event.preventDefault();
    $target = $(event.target);
    $target.hide();
    $(".edit_form_div").css('display','block');
  })

  $(".add_comment_button").click(function(event){
    event.preventDefault();
    $target = $(event.target);
    $target.hide();
    $(".comment_form").css('display','block');
  })


});
