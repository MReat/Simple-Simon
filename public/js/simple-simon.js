"use strict";
$(document).ready(function (){
	
		var playerColorArray = [];

		$('.box').click(function (box) {
			var boxClick = $(this);
			flashBox(boxClick);
			var playerColor = $(this).attr('data-colorID');
			// for (var i = 0; i < playerColor.length; i++) {
			// 	console.log(playerColor[i]);
			// }
				console.log(playerColor);
				playerColorArray.push(playerColor);
				console.log(playerColorArray);
		});
		
		function flashBox (box) {
			box.addClass('active')
			setTimeout(function () {
				box.removeClass('active');
				}, 200)
		}

	$('#start').click(function (box) {
		var colorArray = $('.box');
		var	computerColor = Math.floor(Math.random() * colorArray.length);
		console.log(computerColor);
		var computerColorArray = [];
		computerColorArray.push(computerColor);
		console.log(computerColorArray);


		switch (computerColor) {
			case 0:
				$('#green').fadeOut(200).fadeIn(200);
				break;
			case 1:
				$('#red').fadeOut(200).fadeIn(200);
				break;
			case 2:
				$('#yellow').fadeOut(200).fadeIn(200);
				break;
			case 3:
				$('#blue').fadeOut(200).fadeIn(200);
				break;
			default:
				break;
			console.log(flashBox(computerColor));
		}

	})

			// if (computerColor == 0) {
			// 	flashBox($('#green'));
			// } else if (computerColor == 1) {
			// 	flashBox($('#red'));
			// } else if (computerColor == 2) {
			// 	flashBox($('#yellow'));
			// } else {
			// 	flashBox($('#blue'));
			// }
		// }

	// function randomBlink () {
	// 	flashBox(colorBoxes);
	// };




});
