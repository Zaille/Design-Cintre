$(() => {

	$('.carousel').carousel();

	$('div.div_search_icon').on('click', function () {
		$('div.div_search_icon').toggleClass('div_search_icon_clicked');
	});

	$("#top_button").click(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	});
});