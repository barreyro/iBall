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
});
