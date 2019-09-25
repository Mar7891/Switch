$(document).ready(function() {
	$(window).on("scroll", function(){
		if($(window).scrollTop() > 100){
			$("header").addClass("black");
		}else{
			$("header").removeClass("black");
		}
	});
	let nav = document.querySelector(".nav-links");
	let navLinks = document.querySelectorAll(".nav-links li");
	let search = $(".search");
	let burger = document.querySelector(".burger");
	
	$("a").on("click", function(e){
    e.preventDefault();
    var someBlock = $(e.target).attr("data-id");
    var block = $("#" + someBlock).offset().top;
    	nav.classList.toggle("nav-active");
		search.toggleClass('open');
		burger.classList.toggle("toggle");
    $("html, body").animate({scrollTop: block}, 500);
});



let navSlide = function(){
	let burger = document.querySelector(".burger");
	let nav = document.querySelector(".nav-links");
	let navLinks = document.querySelectorAll(".nav-links li");
	let search = $(".search");
	burger.addEventListener("click", function(){
		nav.classList.toggle("nav-active");
		search.toggleClass('open');
		burger.classList.toggle("toggle");
});
}
		navSlide();

let name = $("#name");
let submit = $("form button[type=submit]");
submit.click(function(e){
	e.preventDefault();
	name.on('blur',function(){
		let val = $(this).val();
		if($.trim(val)){
			$(this).css("background", "green");
		}else{
			$(this).css("background", "red");
			return;
		}
	});

let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    $('#email').on("input", function(){
        if(reg.test($(this).val())){
            $('#button').removeAttr('disabled',false);
            $("#button").css("background", "green");
        } else {
            $('#button').attr('disabled',true);
              $("#button").css("background", "red");
              return;
        }
    });
    let message = $("message");
    message.on('blur',function(){
		let val = $(this).val();
		if($.trim(val)){
			$(this).css("background", "green");
		}else{
			$(this).css("background", "red");
			return;
		}
});
    });


});