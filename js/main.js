$(document).ready(function(){
		$('.owl-carousel').owlCarousel({
		items: 10,
		loop:true,
		margin:10,
		autoPlay:false,
		dots:true,
		nav: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:3,
				nav:false,
			},
			600:{
				items:8,
				nav:false,
				navText: ["<i class='fa fa-chevron-left'></i><i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i><i class='fa fa-chevron-right'></i>"]
			},
			1000:{
				items:10,
				nav:true,
				navText: ["<i class='fa fa-chevron-left'></i><i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i><i class='fa fa-chevron-right'></i>"]
			}
		}
	});

		$('input').keyup(function(e) {
			$( ".f-name" ).change();
		});
});
