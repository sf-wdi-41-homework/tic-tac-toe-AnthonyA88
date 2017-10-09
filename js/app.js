// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  $('.box').click(onClick);
});

alert('Game on!');

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
  }
];

var onClick = function(event) {
  // TODO: Careful setting a boxClicked number to 4. will it always be 4?
  var boxClicked = 4;

  //is a marker on this square already?
  // TODO: with this if statement we'll need an else as well, otherwise i can put on old squares.
  if (boxes[boxClicked].marked === true) {
    alert('pick a new square');
    return;
  }
  boxes[boxClicked].marked = true;

  // TODO: $(this) is not doing anything down here.
  $(this);
};
//If player 1 has played, let player 2 place their marker

var turns = 0;

// TODO: avoid having two document ready calls. This callback will execute only when the above document ready callback executes (leads to weird timing issues)
$(document).ready(function() {
  //see if box is checked for player 1

  console.log('box clicked');
  // TODO:  I like this approach to placing the tile according to who's turn it is, nice job!
  if (turns % 2 === 0) {
    //place Jim
    console.log('HEy!');
    $(this).append('<img src="./images/JimH.jpg">');
    turns++;
  } else {
    //place Dwight
    // TODO: careful with path names
    $(this).append('<img src="./images/DwightS.jpg">');
    turns++;
  }
});

// TODO: It looks like this is the logic that is placing your tiles, not the logic above.  I would try to work on the above logic more to make this game a bit more flexible.  The below code definitely works, but it doesn't reuse code in a DRY manner.
a1.addEventListener('click', function() {
  console.log('marker placed');

  if ($('#a1').append('<img src="./images/JimH.jpg">')) {
  } else $('#a1').append('<img src="./images/DwightS.jpg">');
  $('#a1').addClass('clicked');
});

a2.addEventListener('click', function() {
  console.log('marker placed');
  if ($('#a2').append('<img src="./images/JimH.jpg">')) {
  } else $('#a1').append('<img src="./images/DwightS.jpg">');
  $('#a2').addClass('clicked');
});

a3.addEventListener('click', function() {
  console.log('marker placed');
  if ($('#a3').append('<img src="./images/JimH.jpg">')) {
  } else $('#a1').append('<img src="./images/DwightS.jpg">');
  $('#a3').addClass('clicked');
});

b1.addEventListener('click', function() {
  console.log('marker placed');
  if ($('#b1').append('<img src="./images/JimH.jpg">')) {
  } else $('#a1').append('<img src="./images/DwightS.jpg">');
  $('#b1').addClass('clicked');
});

b2.addEventListener('click', function() {
  console.log('marker placed');
  if ($('#b2').append('<img src="./images/JimH.jpg">')) {
  } else $('#a1').append('<img src="./images/DwightS.jpg">');
  $('#b2').addClass('clicked');
});

b3.addEventListener('click', function() {
  console.log('marker placed');
  if ($('#b3').append('<img src="./images/JimH.jpg">')) {
  } else $('#a1').append('<img src="./images/DwightS.jpg">');
  $('#b3').addClass('clicked');
});

c1.addEventListener('click', function() {
  console.log('marker placed');
  if ($('#c1').append('<img src="./images/JimH.jpg">')) {
  } else $('#a1').append('<img src="./images/DwightS.jpg">');
  $('#c1').addClass('clicked');
});

$('#c2').on('click', function() {
  console.log('marker placed');
  if ($('#c2').append('<img src="./images/JimH.jpg">')) {
  } else $('#a1').append('<img src="./images/DwightS.jpg">');
  $('#c2').addClass('clicked');
});

$('#c3').on('click', function() {
  console.log('marker placed');
  if ($('#c3').append('<img src="./images/JimH.jpg">')) {
  } else $('#a1').append('<img src="./images/DwightS.jpg">');
  $('#c3').addClass('clicked');
});

// TODO: Make sure to call this every time a tile is placed, this looks great!
var win = function() {
  if (
    ($('#a1') && $('#a2') && $('#a3')) ||
    ($('#a1') && $('#b2') && $('#c3')) ||
    ($('#a1') && $('#b1') && $('#c1') === true)
  ) {
    alert('You win!');
  } else if ($('#a2') && $('#b2') && $('#c2') === true) {
    alert('You win!');
  } else if (
    ($('#a3') && $('#b2') && $('#c1')) ||
    ($('#a3') && $('#b3') && $('#c3') === true)
  ) {
    alert('You win!');
  } else if ($('#b1') && $('#b2') && $('#b3') === true) {
    alert('You win!');
  } else if ($('#c1') && $('#c2') && $('#c3') === true) {
    alert('You win!');
  } else {
    alert('Draw');
  }
};
