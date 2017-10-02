// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
$('.box').click(onClick);

});

alert("Game on!");

//If there is an empty marker, place X or 0 there
//If there are 2 X's in a row, place 0 in the third spot
//If there are 2 0's in a row, place X in the third spot

//Place marker O where there is an empty square

var marker = [
{
	placemarker: 'Jim',
	placemarkerImage: 'images/JimH.jpg'
},
{
	placemarker: 'Dwight',
	placemarkerImage: 'images/DwightS.jpg'
}

];

var boxes = [
{
	marked: false
},
{
	marked: false
},
{
	marked: false
},
{
	marked: false
},
{
	marked: false
},
{
	marked: false
},
{
	marked: false
},
{
	marked: false
},
{
	marked: false
}];

var onClick = function (event) {
	var boxClicked = 4;

	//is a marker on this square already?
	if (boxes[boxClicked].marked == true) {
		alert('pick a new square');
		return;
	}
	boxes[boxClicked].marked = true;
	$(this)
} 


var win = function () {


if ($('#a1') && $('#a2') && $('#a3') || $('#a1') && $('#b2') && $('#c3') || $('#a1') && $('#b1') && $('#c1') === true) {
	
	alert("You win!");

} else if ($('#a2') && $('#b2') && $('#c2') === true) {
	
	alert("You win!");

} else if ($('#a3') && $('#b2') && $('#c1') || $('#a3') && $('#b3') && $('#c3') === true) {
	
	alert("You win!");

} else if ($('#b1') && $('#b2') && $('#b3') === true) {

	alert("You win!");

} else if ($('#c1') && $('#c2') && $('#c3') === true) {

	alert("You win!");

} else {
	
	alert("Draw")
}
}
