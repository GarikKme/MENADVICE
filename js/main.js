$(document).ready(function(){

	// Menu opener hamburger

	$('.menu-open').click(function () {
		$('.menu-collapse').slideToggle(500);
		$('.nav__menu').addClass('menu-opened');
	});
	// slider
  $(".owl-carousel").owlCarousel({
		nav:true,
		dots:false,
		//margin:10,
		//stagePadding:5,
		autoWidth:false,
		responsive: {
			// breakpoint from 0 up
			0 : {
					items:1,
			},
			// breakpoint from 480 up
			480 : {
				items:2,
			},
			// breakpoint from 768 up
			768 : {
				items:3,
			},
			992 : {
				items:4
		}
	}
		
	});

	// Скролл к секции

	$('ul.nav__menu a[href^="#"').click(function () {
		var target = $(this).attr('href');
		$('html, body').animate({
			 scrollTop: $(target).offset().top
		}, 500);
		return false;
	});

	//Modal form
	$('.header__btn, .safely__btn').click(function (e) {
		e.preventDefault();
		$('#exampleModal').arcticmodal();
	});


	//Валидация и отправка формы

$(document).ready(function() {
	$('[data-submit]').on('click', function(e) {
			e.preventDefault();
			$(this).parent('form').submit();
	})
	$.validator.addMethod(
			"regex",
			function(value, element, regexp) {
					var re = new RegExp(regexp);
					return this.optional(element) || re.test(value);
			},
			"Please check your input."
	);

	// Функция валидации и вывода сообщений
	function valEl(el) {

			el.validate({
					rules: {
							tel: {
									required: true,
									regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
							},
							name: {
									required: true
							},
							email: {
									required: true,
									email: true
							}
					},
					messages: {
							tel: {
									required: 'Поле обязательно для заполнения',
									regex: 'Телефон может содержать символы + - ()'
							},
							name: {
									required: 'Поле обязательно для заполнения',
							},
							email: {
									required: 'Поле обязательно для заполнения',
									email: 'Неверный формат E-mail'
							}
					},

					// Начинаем проверку id="" формы
					submitHandler: function(form) {
							$('#loader').fadeIn();
							var $form = $(form);
							var $formId = $(form).attr('id');
							switch ($formId) {
									// Если у формы id="goToNewPage" - делаем:
									case 'goToNewPage':
											$.ajax({
															type: 'POST',
															url: $form.attr('action'),
															data: $form.serialize(),
													})
													.always(function(response) {
															//ссылка на страницу "спасибо" - редирект
															location.href = '';
															//отправка целей в Я.Метрику и Google Analytics
															ga('send', 'event', 'masterklass7', 'register');
															yaCounter27714603.reachGoal('lm17lead');
													});
											break;
									// Если у формы id="popupResult" - делаем:
									case 'popupResult':
											$.ajax({
															type: 'POST',
															url: $form.attr('action'),
															data: $form.serialize(),
													})
													.always(function(response) {
															setTimeout(function() {
																	$('#loader').fadeOut();
															}, 800);
															setTimeout(function() {
																	$('#overlay').fadeIn();
																	$form.trigger('reset');
																	//строки для остлеживания целей в Я.Метрике и Google Analytics
															}, 1100);
															// $('#overlay').on('click', function(e) {
															// 		$(this).fadeOut();
															// });
															alert('Спасибо, Ваша заявка отправлена');

													});
											break;
							}
							return false;
					}
			})
	}

	// Запускаем механизм валидации форм, если у них есть класс .js-form
	$('.js-form').each(function() {
			valEl($(this));
	});
	
	});
});