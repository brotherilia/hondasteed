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
      $("#scroll").css({"transform":"rotate(225deg)"}).css({"top":"-5px"});
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
      $(this).css({"transform":"rotate(45deg)"}).css({"top":"15px"});
      $("#menu").hide();
      $("#tools").fadeIn();
    }
    else {
      $(this).css({"transform":"rotate(225deg)"}).css({"top":"-5px"});
      $("#tools").hide();
      $("#menu").fadeIn();
    }
  });

  // Всплывающее окно с изображением

  $(".js-img-link").click(function(event){
    event.preventDefault();
    var popupBgr = $(this).attr("id");
    var popupTitle = $(this).attr("title");
    var popupAlt = $(this).attr("alt");
    var popupName = $(this).attr("name");
    $(".img-popup").css({"background-image": "url('../"+popupBgr+"')"});
    if (popupTitle){
      $(".img-popup__header").text(popupTitle).css({"display": "block"});
    }
    else {
      $(".img-popup__header").css({"display": "none"});
    }
    if (popupAlt){
      $(".img-popup__footer").text(popupAlt).css({"display": "block"});
    }
    else if (popupName){
      $(".img-popup__footer").text(popupName).css({"display": "block"});
    }
    else {
      $(".img-popup__footer").css({"display": "none"});
    }
    $(".img-popup").fadeIn().css({"display": "flex"});
  });
  $(".img-popup").click(function(event){
    $(this).fadeOut();
  });

  // Плавная прокрутка страницы наверх

	$(window).scroll(function(){
    var displayMode  = $("#cssSwitch").css("position");
    if (displayMode == "fixed"){
      $("#cssSwitch").css({"display": "none"});
    }
		if ($(this).scrollTop() > 100) {
			$('#to-top').fadeIn();
		}
		else {
      $("#cssSwitch").css({"display": "block"});
			$('#to-top').hide();
		}
	});
	$('#to-top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

// Смена цветовой схемы

  $("#cssSwitch").click(function(event){
    var currentCSS = $("#stylesheet").attr("href");
    event.preventDefault();
    if (currentCSS == "css/style--dark.min.css"){
      $("#stylesheet").attr("href", "css/style--light.min.css");
      $("#cssSwitchIcon").attr("class", "css-icon css-icon--moon");
    }
    else {
      $("#stylesheet").attr("href", "css/style--dark.min.css");
      $("#cssSwitchIcon").attr("class", "css-icon css-icon--sun");
    }
  });
});
