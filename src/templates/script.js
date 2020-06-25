function getBotResponse() {
  var rawText = $("#textInput").val();
  var userHtml = '<div class="userText my-1 col-10 mr-1"><div>' + rawText + "</div></div>";
  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document
    .getElementById("userInput")
    .scrollIntoView({ block: "start", behavior: "smooth" });
  $.get("/get", { msg: rawText }).done(function(data) {
    var botHtml = '<div class="botText"><div>' + data + "</div></div>";
    $("#chatbox").append(botHtml);
    document
      .getElementById("userInput")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  });
}
$("#textInput").keypress(function(e) {
  if (e.which == 13) {
    getBotResponse();
  }
});
