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

  var popupLink = $(".js-img-link");
  var firstPopupLink = popupLink.first();
  var lastPopupLink = popupLink.last();
  var firstPopupIdx = popupLink.index(firstPopupLink);
  var lastPopupIdx = popupLink.index(lastPopupLink);
  var lastSlideNumber = lastPopupIdx + 1;
  var popupIdx;
  var popupBgr;
  var popupBlock = $(".popup");
  var popupOldSlide = $(".js-old-slide");
  var popupNewSlide = $(".js-new-slide");
  var popupHeader = $(".popup__header");
  var popupFooter = $(".popup__footer");
  var popupPrev = $(".js-prev-img");
  var popupNext = $(".js-next-img");
  var slideDuration = 400;

  var setupSlide = function(){
    var popupCurrent = popupLink.eq(popupIdx);
    var popupTitle = popupCurrent.attr("title");
    var popupAlt = popupCurrent.attr("alt");
    var popupName = popupCurrent.attr("name");
    var currentSlideNumber = popupIdx + 1;
    var popupCounter = currentSlideNumber+" из "+lastSlideNumber;
    popupBgr = popupCurrent.attr("id");
    popupNewSlide.css({"background-image": "url('../"+popupBgr+"')"});
    if (popupTitle){
      popupHeader.text(popupTitle).css({"opacity": "1"});
    }
    else {
      popupHeader.css({"opacity": "0"});
    }
    if (popupAlt){
      popupFooter.text(popupCounter+": "+popupAlt);
    }
    else if (popupName){
      popupFooter.text(popupCounter+": "+popupName);
    }
    else {
      popupFooter.text(popupCounter);
    }
  }

  var prevSlide = function(){
    popupOldSlide.css({"left": "0", "background-image": "url('../"+popupBgr+"')", "opacity": "1"});
    popupNewSlide.css({"left": "-100%", "opacity": "0"});
    if (popupIdx == firstPopupIdx){
      popupIdx = lastPopupIdx;
    }
    else {
      popupIdx--;
    }
    $(setupSlide);
    popupOldSlide.animate({"left": "100%", "opacity" : "0"}, slideDuration);
    popupNewSlide.animate({"left": "0", "opacity" : "1"}, slideDuration);
  }

  var nextSlide = function(){
    popupOldSlide.css({"left": "0", "background-image": "url('../"+popupBgr+"')", "opacity": "1"});
    popupNewSlide.css({"left": "100%", "opacity": "0"});
    if (popupIdx == lastPopupIdx){
      popupIdx = firstPopupIdx;
    }
    else {
      popupIdx++;
    }
    $(setupSlide);
    popupOldSlide.animate({"left": "-100%", "opacity" : "0"}, slideDuration);
    popupNewSlide.animate({"left": "0", "opacity" : "1"}, slideDuration);
  }

  popupLink.click(function(event){
    popupIdx = popupLink.index(this);
    $(setupSlide);
    popupBlock.fadeIn().css({"display": "flex"});
  });

  popupPrev.click(function(event){
    event.stopImmediatePropagation();
    $(prevSlide);
  });

  popupBlock.on("swiperight",function(event){
    $(prevSlide);
  });

  popupNext.click(function(event){
    event.stopImmediatePropagation();
    $(nextSlide);
  });

  popupBlock.on("swipeleft",function(event){
    $(nextSlide);
  });

  popupBlock.click(function(event){
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

// Открытие списка "Хронология развития по дням рождения"

  $("#event-list").hide();
  $("#event-list-link").click(function(event){
    event.preventDefault();
    if ($("#event-list").css("display") == "none"){
      $("#event-list").show();
    }
    else {
      $("#event-list").hide();
    }
  });

});
