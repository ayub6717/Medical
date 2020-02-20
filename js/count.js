// Number Count
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               
		to: 0,                
		speed: 1000,           
		refreshInterval: 100,  
		decimals: 0,           
		formatter: formatter,  
		onUpdate: null,       
		onComplete: null  
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});

// Number count end


// MEDICAL

// CLIENT SLIDER

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

// Mega-menu

$(document).ready(function() {
   
   $(window).resize(function(){
	   if ($(window).width() >= 980){	
   
		 $(".navbar .dropdown-toggle").hover(function () {
			$(this).parent().toggleClass("show");
			$(this).parent().find(".dropdown-menu").toggleClass("show"); 
		  });
   
		 $( ".navbar .dropdown-menu" ).mouseleave(function() {
		   $(this).removeClass("show");  
		 });
	 
	   }	
   });  
	 
});

//    iso

$(function(){
    $('.categories a').click(function(e){
    	$('.categories ul li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	var itemSelected = $(this).attr('data-filter');
    	$('.portfolio-item').each(function(){
    		if (itemSelected == '*'){
    			$(this).removeClass('filtered').removeClass('selected');
    			return;
    		} else if($(this).is(itemSelected)){
    			$(this).removeClass('filtered').addClass('selected');
    		} else{
    			$(this).removeClass('selected').addClass('filtered');
    		}
    	});
    });
});


// Scroll button < This is very importantn >


$(document).ready(function(){

	$("#myBtn").hide();
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#myBtn').fadeIn();
			} else {
				$('#myBtn').fadeOut();
			}
		});

		$('#myBtn i').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});



// slide Anem

$(window).scroll(function() {
	$(".slideanim").each(function() {
	  var pos = $(this).offset().top;

	  var winTop = $(window).scrollTop();
	  if (pos < winTop + 600) {
		$(this).addClass("slide");
	  }
	});
  });







