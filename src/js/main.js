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
		animate: '10',
    slide: function (ev, ui) {
      if (ui.value > 3) {
        $(this).find('.ui-slider-handle').css('margin-left', '-30px');
      } else if (ui.value == 1) {
        $(this).find('.ui-slider-handle').css('margin-left', '-10px');
      } else{
        $(this).find('.ui-slider-handle').css('margin-left', '-20px');
      }
    },
		change: function( event, ui ) {
			$("#sliderTime-value").val(ui.value);
			$(this).find('.calc__sliders__item__slider__tip').removeClass('active');
			$(this).find('.calc__sliders__item__slider__tip:nth-child(' + ui.value + ')').addClass('active');
      calc_timer();
		}
  });

  $( "#sliderStart" ).slider({
    range: "min",
    min: 1,
		max: 3,
		value: 1,
		animate: '10',
    slide: function (ev, ui) {
      if (ui.value >= 3) {
        $(this).find('.ui-slider-handle').css('margin-left', '-30px');
      } else if (ui.value == 1) {
        $(this).find('.ui-slider-handle').css('margin-left', '-10px');
      } else{
        $(this).find('.ui-slider-handle').css('margin-left', '-20px');
      }
      var target = $("#sliderEnd").slider('value');
      var current = ui.value;

      if (target < current){
        $( "#sliderEnd" ).slider({
          value: ui.value
        });
        var target = $("#sliderEnd").slider('value');
        setNeighborPos();
      }
      function setNeighborPos(){
        if (target >= 3) {
          $("#sliderEnd").find('.ui-slider-handle').css('margin-left', '-30px');
        } else if (target == 1) {
          $("#sliderEnd").find('.ui-slider-handle').css('margin-left', '-10px');
        } else{
          $("#sliderEnd").find('.ui-slider-handle').css('margin-left', '-20px');
        }
      }

    },

		change: function( event, ui ) {
			$("#sliderStart-value").val(ui.value);
			$(this).find('.calc__sliders__item__slider__tip').removeClass('active');
			$(this).find('.calc__sliders__item__slider__tip:nth-child(' + ui.value + ')').addClass('active');
      calc_timer();
		}
  });

  $( "#sliderEnd" ).slider({
    range: "min",
    min: 1,
		max: 3,
		value: 2,
		animate: '10',
    slide: function (ev, ui) {
      if (ui.value >= 3) {
        $(this).find('.ui-slider-handle').css('margin-left', '-30px');
      } else if (ui.value == 1) {
        $(this).find('.ui-slider-handle').css('margin-left', '-10px');
      } else{
        $(this).find('.ui-slider-handle').css('margin-left', '-20px');
      }
      var target = $("#sliderStart").slider('value');
      var current = ui.value;

      if (target > current) {
          //return false;
          $( "#sliderStart" ).slider({
            value: ui.value
          });
          var target2 = $("#sliderStart").slider('value');
          setNeighbor2Pos();
      }
      function setNeighbor2Pos(){
        if (target2 >= 3) {
          $("#sliderStart").find('.ui-slider-handle').css('margin-left', '-30px');
        } else if (target2 == 1) {
          $("#sliderStart").find('.ui-slider-handle').css('margin-left', '-10px');
        } else{
          $("#sliderStart").find('.ui-slider-handle').css('margin-left', '-20px');
        }
      }
    },
		change: function( event, ui ) {
      if (ui.value >= 3) {
        $(this).find('.ui-slider-handle').css('margin-left', '-30px');
      } else if (ui.value == 1) {
        $(this).find('.ui-slider-handle').css('margin-left', '-10px');
      } else{
        $(this).find('.ui-slider-handle').css('margin-left', '-20px');
      }
			$("#sliderEnd-value").val(ui.value);
			$(this).find('.calc__sliders__item__slider__tip').removeClass('active');
			$(this).find('.calc__sliders__item__slider__tip:nth-child(' + ui.value + ')').addClass('active');
      calc_timer();
		}
  });

  // calc logic
  function calc_timer(){
    var time = $('#sliderTime-value').val();
    var start = $('#sliderStart-value').val();
    var end = $('#sliderEnd-value').val();
    var setTime = "3"
    var setVerb = "месяца"

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
    // Средний – выше среднего
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
