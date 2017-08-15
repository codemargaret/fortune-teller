$(document).ready(function() {
  $("#fortune-survey").submit(function(event) {
    event.preventDefault();
    $("#good").show();
    $("input:checkbox[name=fortune-good]:checked").each(function() {
      var itemofgoodfortune = $(this).val();
      $("#good").append(itemofgoodfortune + "<br>");

    });
    $("#fortune-survey").hide();
  });
});
