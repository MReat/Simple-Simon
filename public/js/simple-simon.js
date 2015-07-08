"use strict";
$(document).ready(function () {
var computerSequence = [];
var userIndex = 0; 

// Box Animation
	function flashBox (id) {
		$('#' + id).addClass('active');
		setTimeout(function () {
			$('#' + id).removeClass('active');
			}, 100);
	};

// User Game Functions
	$('.box').click(function () {
		var boxClick = $(this).attr('id');
		flashBox(boxClick);
		var playerColor = $(this).attr('id'); 
		console.log(playerColor);
		if (boxClick == computerSequence[userIndex]) {
			userIndex +=1;
			if (userIndex == computerSequence.length) {
				copy ();
				userIndex = 0;
			}
		} else {
			alert("Game Over - You made it to Round: " + computerSequence.length + "!");
			location.reload(true);
		}
	});

// Computer Game Functions
	$('#start').click(function () {
		randomComputerChoice();
		playSimonSequence();
	});	
	
	// random color selector
	function randomComputerChoice () {	
		var colorArray = $('.box');
		var	randomComputerColor = Math.floor(Math.random() * colorArray.length); 
		var boxToAnimate = colorArray[randomComputerColor];
		var id = boxToAnimate.getAttribute('id');
		computerSequence.push(id); 
		console.log(computerSequence);
	};
	
	// color sequencing script
	function playSimonSequence () {
		var sliderValue = $('#slider').val();
		console.log(sliderValue);
		var i = 0;
		var intervalID = setInterval(function() {
			if (i >= computerSequence.length) {
				clearInterval(intervalID);
			};
		flashBox(computerSequence[i])
		i += 1;
		}, (sliderValue * 100));
	};
	
	// round sequencing portion...connected to the conditional in user game function
	function copy () {
		randomComputerChoice();
		playSimonSequence();
		$('#score').val("Round: " + computerSequence.length);
	};

})
