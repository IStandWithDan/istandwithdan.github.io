var quotes2 = new Array();

var quotes = [];
$.getJSON( "quotes.json", function( data){
  quotes = data;
});

var counter = 0;
var counter2 = 0;

function loop() {
  if (counter > 4) counter = 0;
  $('#quote p:first').text(quotes[counter]);
  $('#quote p:first').hide();
  $("#quote p:first").fadeIn("slow");
  counter++;
  setTimeout(loop2, 2500);
}

function loop2() {
  if (counter2 > 4) counter2 = 0;
  counter2++;
  setTimeout(loop, 2500);
}
loop();
