$("#collapse1").hover(function () {
  $(this).prev("a").css("color", "rgb(180, 157, 229)");
  $("#itbrand").css("color", "rgb(180, 157, 229)");
  $(".navbar").css("background-color", "#000000");

},    function()  {
  $(this).prev("a").css("color", "rgb(218, 218, 218)");
  $("#itbrand").css("color", "rgb(171, 164, 235)");
  $(".navbar").css("background-color", "rgb(40, 42, 53)");
}
);

$(".it").hover(function () {
  $(this).css("color", "rgb(180, 157, 229)");
  $("#itbrand").css("color", "rgb(180, 157, 229)");
  $(".navbar").css("background-color", "#000000");
},    function()  {
  $(this).css("color", "rgb(218, 218, 218)");
  $("#itbrand").css("color", "rgb(171, 164, 235)");
  $(".navbar").css("background-color", "rgb(40, 42, 53)");
}
);

$("#collapse2").hover(function () {
    $(this).prev("a").css("color", "rgb(108, 221, 131)");
    $("#itbrand").css("color", "rgb(108, 221, 131)");
    $(".navbar").css("background-color", "#000000");
},    function()  {
    $(this).prev("a").css("color", "rgb(218, 218, 218)");
    $("#itbrand").css("color", "rgb(171, 164, 235)");
    $(".navbar").css("background-color", "rgb(40, 42, 53)");
}
);

$(".legal").hover(function () {
  $(this).css("color", "rgb(108, 221, 131)");
  $("#itbrand").css("color", "rgb(108, 221, 131)");
  $(".navbar").css("background-color", "#000000");
},    function()  {
  $(this).css("color", "rgb(218, 218, 218)");
  $("#itbrand").css("color", "rgb(171, 164, 235)");
  $(".navbar").css("background-color", "rgb(40, 42, 53)");
}
);



$("#collapse3").hover(function () {
  $(this).prev("a").css("color", "rgb(231, 121, 184)");
  $("#itbrand").css("color", "rgb(231, 121, 184)");
  $(".navbar").css("background-color", "#000000");
},    function()  {
  $(this).prev("a").css("color", "rgb(218, 218, 218)");
  $("#itbrand").css("color", "rgb(218, 218, 218)");
  $(".navbar").css("background-color", "rgb(40, 42, 53)");
}
);

$(".interact").hover(function () {
  $(this).css("color", "rgb(231, 121, 184)");
  $("#itbrand").css("color", "rgb(231, 121, 184)");
  $(".navbar").css("background-color", "#000000");
},    function()  {
  $(this).css("color", "rgb(218, 218, 218)");
  $("#itbrand").css("color", "rgb(218, 218, 218)");
  $(".navbar").css("background-color", "rgb(40, 42, 53)");
}
);

function checkForm(form) {
  if(!form.terms.checked) {
    alert("Please indicate that you accept the Terms and Conditions")
    form.terms.focus();
    return false;
  }
  return true;
}




