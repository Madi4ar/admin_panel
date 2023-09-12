$(document).ready(function(){
    $(".faq-head").click(function(){
		$(this).parent().find(".faq-content").slideToggle();
		$(this).find(".button").toggleClass("active: transform rotate-180 before:!w-0");
		$(this).parent().find(".faq-head").toggleClass("december");
		$(this).parent().find(".aezakmi").toggleClass("september");
	});
});