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

  $(".edit_comment_link").on("submit", function(event){
  event.preventDefault();
  $target = $(event.target);
  $.ajax({
     url: $target.attr("action"),
     type: "PUT",
     data: $target.serialize()
  }).done(function(response){
    $("html").html(response)
  })
  })


});
