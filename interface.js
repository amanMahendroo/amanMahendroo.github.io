$(document).ready(function () {
	$('.ham').click(function () {
		$('.nav').toggleClass('open')
		setTimeout(function () {
			$('.container').toggleClass('disp')
		}, 500)
		setTimeout(function () {
			$('.container .list .hide').toggleClass('no-hide')
		}, 1000);
	})
	$('.scroll').click(function () {
		// console.log($('.skills').offset().top)
		$('html, body').animate({
			scrollTop: $('.skills').offset().top
		}, 500)
	})
	$(window).scroll(function () {
		if ($(window).scrollTop() > 0.8 * $('.skills').offset().top) {
			setTimeout(function () {
				$('.skills .list:first-child').addClass('open-list')
			}, 100)
			setTimeout(function () {
				$('.skills .list:nth-child(2)').addClass('open-list')
			}, 200)
			setTimeout(function () {
				$('.skills .list:nth-child(3)').addClass('open-list')
			}, 300)
			setTimeout(function () {
				$('.skills .list:nth-child(4)').addClass('open-list')
			}, 400)
			setTimeout(function () {
				$('.skills .list:nth-child(5)').addClass('open-list')
			}, 500)
			setTimeout(function () {
				$('.skills .list:nth-child(6)').addClass('open-list')
			}, 600)
		}
	})
})