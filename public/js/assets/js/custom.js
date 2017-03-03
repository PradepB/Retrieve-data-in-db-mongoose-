// JavaScript Document
$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});

	document.addEventListener('DOMContentLoaded', function() {
		var chart = window.chart = new EasyPieChart(document.querySelector('span'), {
			easing: 'easeOutElastic',
			delay: 3000,
			barColor: '#69c',
			trackColor: '#ace',
			scaleColor: false,
			lineWidth: 20,
			trackWidth: 16,
			lineCap: 'butt',
			onStep: function(from, to, percent) {
			this.el.children[0].innerHTML = Math.round(percent);
			}
		});	
		
		// document.querySelector('.js_update').addEventListener('click', function(e) {
		// 	chart.update(Math.random()*200-100);
		// });

	});
	