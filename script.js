$(document).ready(function() {
	$('.collage .img').click(function () {
		$(this).toggleClass('open');
	})


	$('.inner').click(function () {
		// $('.inner').removeClass('display')
		$(this).toggleClass('display')
	})
})

