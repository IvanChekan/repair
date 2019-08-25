// Обработка и отправка через технологию 	Ajax
$(document).ready(function () {
	$('#offer__form').validate({
		rules: {
			username: {
				required: true,
				minlength: 2
			},
			userphone: {
				required: true,
			}
		},
		messages: {
			username: {
				required: "укажите имя",
				minlength: jQuery.validator.format("Осталось символов: 1")
			},
			userphone: {
				required: "Укажите телефон",
			}
		},
	});
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
// Валидация форм
$(document).ready(function () {
	$('#brif-form').validate({
		rules: {
			username: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			userphone: {
				required: true,
			}
		},
		messages: {
			username: {
				required: "укажите имя",
				minlength: jQuery.validator.format("Осталось символов: 1")
			},
			email: {
				required: "Введите ваш email",
				email: "Введите корректный email"
			},
			userphone: {
				required: "Укажите телефон",
			}
		},
	});

	// Маска для телефона
	$('.phone').mask('+7 (999) 999-99-99');
});