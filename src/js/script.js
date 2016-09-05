$(document).ready(function(){

  // Всплывающее меню

  $("#toggle").click(function(event){
    var displayStatus  = $("#popup").css("display");
    event.preventDefault();
    if (displayStatus == "none"){
      $(this).css({"transform":"rotate(90deg)"});
      $("#popup").fadeIn();
    }
    else {
      $(this).css({"transform":"none"});
      $("#popup").hide();
      $("#menu").css({"display":"block"});
      $("#tools").css({"display":"none"});
      $("#scroll").css({"transform":"rotate(225deg)"}).css({"top":"0"});
    }
  });

/*
  $(window).resize(function(){
    var displayMode  = $("#popup").css("position");
    if (displayMode == "fixed"){
      $("#popup").hide();
      $("#toggle").css({"transform":"none"});
      $("#menu").css({"display":"block"});
      $("#tools").css({"display":"none"});
      $("#scroll").css({"transform":"rotate(225deg)"}).css({"top":"0"});
    }
    else {
      $("#popup").show();
    }
  });
*/

  $("#scroll").click(function(event){
    var displayStatus  = $("#menu").css("display");
    event.preventDefault();
    if (displayStatus == "block"){
      $(this).css({"transform":"rotate(45deg)"}).css({"top":"20px"});
      $("#menu").hide();
      $("#tools").fadeIn();
    }
    else {
      $(this).css({"transform":"rotate(225deg)"}).css({"top":"0"});
      $("#tools").hide();
      $("#menu").fadeIn();
    }
  });

  // Плавная прокрутка страницы наверх

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#to-top').fadeIn();
		}
		else {
			$('#to-top').hide();
		}
	});
	$('#to-top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
});
