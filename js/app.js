// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
$('.box').click(onClick);

});

alert("Game on!");

$('.body').each(onClick);


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
	if (boxes[boxClicked].marked === true) {
		alert('pick a new square');
		return;
	}
	boxes[boxClicked].marked = true;
	$(this)
} 
//If player 1 has played, let player 2 place their marker

var turns = 0;

$(document).ready(function() {

	//see if box is checked for player 1

	console.log("box clicked");
	if (turns % 2 === 0) {
		//place Jim
		$(this).append('<img src="./images/JimH.jpg">');
		turns++;
	} else {
		//place Dwight
		$(this).append('<img src="..images/DwightS.jpg">')
		turns++;
}

});

a1.addEventListener("click", function() {
	console.log("marker placed")
	if ($('#a1').append('<img src="./images/JimH.jpg">')) {
	} else $('#a1').append('<img src="./images/DwightS.jpg">')
	$('#a1').addClass("clicked")
});


a2.addEventListener("click", function() {
	console.log("marker placed")
	if ($('#a2').append('<img src="./images/JimH.jpg">')) {
	} else $('#a1').append('<img src="./images/DwightS.jpg">')
	$('#a2').addClass("clicked")
});

a3.addEventListener("click", function() {
	console.log("marker placed")
	if ($('#a3').append('<img src="./images/JimH.jpg">')) {
	} else $('#a1').append('<img src="./images/DwightS.jpg">')
	$('#a3').addClass("clicked")
});

b1.addEventListener("click", function() {
	console.log("marker placed")	
	if ($('#b1').append('<img src="./images/JimH.jpg">')) {
	} else $('#a1').append('<img src="./images/DwightS.jpg">')
	$('#b1').addClass("clicked")
});

b2.addEventListener("click", function() {
	console.log("marker placed")	
	if ($('#b2').append('<img src="./images/JimH.jpg">')) {
	} else $('#a1').append('<img src="./images/DwightS.jpg">')
	$('#b2').addClass("clicked")
});

b3.addEventListener("click", function() {
	console.log("marker placed")
	if ($('#b3').append('<img src="./images/JimH.jpg">')) {
	} else $('#a1').append('<img src="./images/DwightS.jpg">')
	$('#b3').addClass("clicked")	
});

c1.addEventListener("click", function() {
	console.log("marker placed")
	if ($('#c1').append('<img src="./images/JimH.jpg">')) {
	} else $('#a1').append('<img src="./images/DwightS.jpg">')
	$('#c1').addClass("clicked")	
});

$('#c2').on("click", function() {
	console.log("marker placed")
	if ($('#c2').append('<img src="./images/JimH.jpg">')) {
	} else $('#a1').append('<img src="./images/DwightS.jpg">')
	$('#c2').addClass("clicked")	
});

$('#c3').on("click", function() {
	console.log("marker placed")		
	if ($('#c3').append('<img src="./images/JimH.jpg">')) {
	 } else $('#a1').append('<img src="./images/DwightS.jpg">')
	$('#c3').addClass("clicked")
});


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
			
			alert("Draw");
		}
}




