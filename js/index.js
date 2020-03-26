$(window).scroll(function(){

	var wscroll = $(this).scrollTop();

		$('.jumbotron img').css({
			'transform' : 'translate(0px,'+ wscroll/4+'%)'
		});
		// console.log(wscroll);
		$('.jumbotron h1').css({
			'transform' : 'translate(0px,'+ wscroll/2+'%)'
		});
		$('.jumbotron p').css({
			'transform' : 'translate(0px,'+ wscroll/1.2+'%)'
		});
	
	
});