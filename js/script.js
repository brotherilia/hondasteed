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

  // Слайдер на первой странице

  var slider = $(".slider");
  var sliderOldSlide = $(".jssld-old-slide");
  var sliderNewSlide = $(".jssld-new-slide");
  var sliderButtons = $(".slider__btn");
  var sliderPrevButton = $(".jssld-prev-img");
  var sliderNextButton = $(".jssld-next-img");
  var slideCounter = 1;
  var slideLastNumber = 70;
  var setSliderHeight = function(){
    var sliderCurrentWidth = slider.css("width");
    var sliderCurrentHeight = parseFloat(sliderCurrentWidth) * 0.45947;
    slider.css({"height": sliderCurrentHeight});
  }

  $(setSliderHeight);
  sliderNewSlide.css({"background-image": "url('../tmp/ugc/img/slider/"+slideCounter+".jpg')"});

  var sliderPrevSlide = function(){
    sliderOldSlide.css({"background-image": "url('../tmp/ugc/img/slider/"+slideCounter+".jpg')", "opacity": "1"});
    if (slideCounter == 1){
      slideCounter = slideLastNumber;
    }
    else {
      slideCounter--;
    }
    sliderNewSlide.css({"background-image": "url('../tmp/ugc/img/slider/"+slideCounter+".jpg')", "opacity": "0"});
    sliderOldSlide.animate({"opacity" : "0"}, slideDuration);
    sliderNewSlide.animate({"opacity" : "1"}, slideDuration);
  }

  var sliderNextSlide = function(){
    sliderOldSlide.css({"background-image": "url('../tmp/ugc/img/slider/"+slideCounter+".jpg')", "opacity": "1"});
    if (slideCounter == slideLastNumber){
      slideCounter = 1;
    }
    else {
      slideCounter++;
    }
    sliderNewSlide.css({"background-image": "url('../tmp/ugc/img/slider/"+slideCounter+".jpg')", "opacity": "0"});
    sliderOldSlide.animate({"opacity" : "0"}, slideDuration);
    sliderNewSlide.animate({"opacity" : "1"}, slideDuration);
  }

  var slideAutoChange = setInterval (function(){
    $(sliderNextSlide);
  }, 3000);

  sliderNewSlide.click(function(event){
    sliderButtons.delay(400).fadeIn(300);
    clearInterval(slideAutoChange);
  });

  sliderPrevButton.click(function(event){
    $(sliderPrevSlide);
  });

  sliderNextButton.click(function(event){
    $(sliderNextSlide);
  });

  sliderNewSlide.on("swipeleft",function(event){
    $(sliderNextSlide);
  });

  sliderNewSlide.on("swiperight",function(event){
    $(sliderPrevSlide);
  });

  $(window).resize(function(){
    $(setSliderHeight);
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
    popupBlock.fadeIn().css({"display": "block"});
  });

  popupPrev.click(function(event){
    event.stopImmediatePropagation();
    $(prevSlide);
  });

  popupBlock.on("swiperight",function(event){
    event.stopImmediatePropagation();
    $(prevSlide);
  });

  popupNext.click(function(event){
    event.stopImmediatePropagation();
    $(nextSlide);
  });

  popupBlock.on("swipeleft",function(event){
    event.stopImmediatePropagation();
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

// Особенности первой страницы

  var curentPage = document.location.pathname;
  if ((curentPage == "/index.html") || (curentPage == "/")){
    $("#stylesheet").attr("href", "css/style--dark.min.css");
    $("#cssSwitchIcon").attr("class", "css-icon css-icon--sun");
  }

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
