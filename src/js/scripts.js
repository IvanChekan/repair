// Обработка и отправка через технологию 	Ajax
$(document).ready(function () {
	$('#offer-form').on('submit', function (event) {
		event.preventDefault();
		$.ajax({
			url: 'mail.php',
			type: 'POST',
			data: $(this).serialize(),
			success: function (data) {
				$('.success').html(data + ',Ваша форма отправлена.')
			}
		});
	});
});


// Слайдер портфолио 
$(document).ready(function () {
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.arrows__left'),
		nextArrow: $('.arrows__right'),
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
});

// Инициализация  WOW.JS
$(document).ready(function () {
	new WOW().init();
});