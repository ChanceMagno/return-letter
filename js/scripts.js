$(document).ready(function() {
  $("#formOne").submit(function() {
    var person1Input = $("input#personName").val();

    $(".inputtedUser").text(person1Input);
    $("#story").show();

    event.preventDefault();
  });
});
