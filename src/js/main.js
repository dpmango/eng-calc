$(document).ready(function(){

 	// Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	// smoth scroll
	$('a[href^="#section"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
	});

  // slider
	$( "#sliderTime" ).slider({
    range: "min",
    min: 1,
		max: 4,
		value: 4,
		animate: 'slow',
		change: function( event, ui ) {
			$("#sliderTime-value").val(ui.value);
			$(this).find('.calc__sliders__item__slider__tip').removeClass('active');
			$(this).find('.calc__sliders__item__slider__tip:nth-child(' + ui.value + ')').addClass('active');
      calc_timer();
      if (ui.value > 3) {
        $(this).find('.ui-slider-handle').css('margin-left', '-2em');
      } else{
        $(this).find('.ui-slider-handle').css('margin-left', '-0.6em');
      }
		}
  });

  $( "#sliderStart" ).slider({
    range: "min",
    min: 1,
		max: 3,
		value: 1,
		animate: 'slow',
    slide: function (ev, ui) {
      $( "#sliderEnd" ).slider({
        value: ui.value
      });
    },
		change: function( event, ui ) {
			$("#sliderStart-value").val(ui.value);
			$(this).find('.calc__sliders__item__slider__tip').removeClass('active');
			$(this).find('.calc__sliders__item__slider__tip:nth-child(' + ui.value + ')').addClass('active');
      calc_timer();
      if (ui.value > 2) {
        $(this).find('.ui-slider-handle').css('margin-left', '-2em');
      } else{
        $(this).find('.ui-slider-handle').css('margin-left', '-0.6em');
      }
		}
  });

  $( "#sliderEnd" ).slider({
    range: "min",
    min: 1,
		max: 3,
		value: 2,
		animate: 'slow',
    slide: function (ev, ui) {
        var target = $("#sliderStart").slider('value');
        var current = ui.value;

        if (target > current) {
            return false;
        }
    },
		change: function( event, ui ) {
			$("#sliderEnd-value").val(ui.value);
			$(this).find('.calc__sliders__item__slider__tip').removeClass('active');
			$(this).find('.calc__sliders__item__slider__tip:nth-child(' + ui.value + ')').addClass('active');
      calc_timer();
      if (ui.value > 2) {
        $(this).find('.ui-slider-handle').css('margin-left', '-2em');
      } else{
        $(this).find('.ui-slider-handle').css('margin-left', '-0.6em');
      }
		}
  });

  // calc logic
  function calc_timer(){
    var time = $('#sliderTime-value').val();
    var start = $('#sliderStart-value').val();
    var end = $('#sliderEnd-value').val();
    var setTime = "12"
    var setVerb = "месяцев"

    if ( start == "1" && end == "1" && time == "1" ){
      setTime = "8"
    } else if ( start == "1" && end == "1" && time == "2" ) {
      setTime = "6"
    } else if ( start == "1" && end == "1" && time == "3" ) {
      setTime = "4"
    } else if ( start == "1" && end == "1" && time == "4" ) {
      setTime = "2"
    }
    // Нулевой - средний
    else if ( start == "1" && end == "2" && time == "1" ){
      setTime = "12"
    } else if ( start == "1" && end == "2" && time == "2" ) {
      setTime = "9"
    } else if ( start == "1" && end == "2" && time == "3" ) {
      setTime = "6"
    } else if ( start == "1" && end == "2" && time == "4" ) {
      setTime = "3"
    }
    // Нулевой – выше среднего
    else if ( start == "1" && end == "3" && time == "1" ){
      setTime = "18"
    } else if ( start == "1" && end == "3" && time == "2" ) {
      setTime = "15"
    } else if ( start == "1" && end == "3" && time == "3" ) {
      setTime = "12"
    } else if ( start == "1" && end == "3" && time == "4" ) {
      setTime = "9"
    }
    // Начальный - средний
    else if ( start == "2" && end == "2" && time == "1" ){
      setTime = "4"
    } else if ( start == "2" && end == "2" && time == "2" ) {
      setTime = "3"
    } else if ( start == "2" && end == "2" && time == "3" ) {
      setTime = "2"
    } else if ( start == "2" && end == "2" && time == "4" ) {
      setTime = "1"
    }
    // Начальный – выше среднего
    else if ( start == "2" && end == "3" && time == "1" ){
      setTime = "7"
    } else if ( start == "2" && end == "3" && time == "2" ) {
      setTime = "6"
    } else if ( start == "2" && end == "3" && time == "3" ) {
      setTime = "5"
    } else if ( start == "2" && end == "3" && time == "4" ) {
      setTime = "4"
    }
    // НСредний – выше среднего
    else if ( start == "3" && end == "3" && time == "1" ){
      setTime = "12"
    } else if ( start == "3" && end == "3" && time == "2" ) {
      setTime = "9"
    } else if ( start == "3" && end == "3" && time == "3" ) {
      setTime = "6"
    } else if ( start == "3" && end == "3" && time == "4" ) {
      setTime = "3"
    }

    $('.calendar__number').text(setTime);

    if (setTime == "1" ){
      setVerb = "месяц"
    } else if (setTime == "2" || setTime == "3" || setTime == "4" ) {
      setVerb = "месяца"
    } else {
      setVerb = "месяцев"
    }

    $('.calendar__type').text(setVerb);
  }

});
