var MAX = Math.floor(Math.random() * 10000)
var randomNumber = Math.floor(Math.random()* MAX)
var numGuess = 0
$(document).ready(function(){
$('h1').text("Guess a number between 0 and " + MAX + " .");
$('#guess').on('submit', function(event){
 event.preventDefault();
var number = parseInt($('#number').val(),10);
if ($.isNumeric(number)){
if (randomNumber > number){
$('h1').text(number + " is too low. Try something higher");
 numGuess++
} else if(number > randomNumber){
 $('h1').text( number + " is too high. Try something lower");
 numGuess++
}
else {
numGuess ++
$('h1').text("Congrats! You guessed the correct number in " + numGuess + " guess(es)! Do you want to play again?");
// add button to have them play again
 var button = $('<a href ="index.html"><input type="button" value="Yes, let me at it!"/></a>');
$('#guess').hide();
$('body').append(button);
}
} else {
$('h1').text("Invalid input, must enter a number between 0 and " + MAX + " .");
}
});
});
