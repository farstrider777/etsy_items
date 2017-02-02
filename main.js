/*
Use the items variable to write a function for each question that gives the answer.
Using the innerHTML() method, place your answers in the correct part of the index.html file.
Make your index.html page look just like the mockup.png (shouldn't be too bad).
Make sure the output matches the answers below each question.
Make sure to comment your code as you walk through your though process.
*/

//Show me how to calculate the average price of all items.
//  The average price is $23.63

// to be reused for any Price display if necessary
function roundToCents(rawPrice){
  return Math.round(rawPrice * 100) / 100
}

// to get the entire element and set it = to javascript varible
var jAnswer1 = document.getElementById("answer1");

//gets each object in the array drills down to the value stored in the price key
//adds each of the values together and divides by items.length to get average
function calcAverPrice(){
  var total = 0
  for (var count = 0; count < items.length; count++) {
    total += items[count].price
    }
  return total / items.length
}

// displays rounded average onscreen with a nice dollar sign
jAnswer1.innerHTML = "$" + roundToCents(calcAverPrice());


/*Show me how to get an array of items that cost between $14.00 and $18.00 USD
  1970s Coors Banquet Glass Beer Pitcher

  The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug

  Hand Painted Colorful Feather Glass*/

var items14To18bucks = []; // initalize array to be filled with 14 to 18 dollar items

function createArray14To18(){
  for (var count = 0; count < items.length; count++) {
      if(items[count].price < 18 && items[count].price > 14){ // checks each items price
        items14To18bucks.push(items[count].title);            // adds it to array if it meets criteria
    //    console.log(items[0].price)
      }
    }
  return items14To18bucks  // returns the array of items that meet the requirements
}

//console.log(createArray14To18())

// to get the entire element and set it = to javascript varible
var jTitle = document.getElementById("answer2");

//jtitle = createArray14To18[0];
jTitle.innerHTML = createArray14To18();

/*Which item has a "GBP" currency code? Display it's name and price.
  1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18 */




/*
Display a list of all items who are made of wood.
  SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.

  Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.

  Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.

  Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.

  Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.
*/








/*
Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
  Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
  wall mount bottle opener
  wedding
  man cave
  christmas gift
  guy gift
  fathers day
  home bar
  beer
  bar

  The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:

  glass
  sandblast cabinet
  vinyl
  beer glass
  pint glass
  etched pint glass
  etched glass
  etched beer glass
  16 oz pint
  beer gift
  etched harry potter glass
  the three broomsticks glass
  personalized harry potter glass
*/




/*
How many items were made by their sellers?
  18 were made by their sellers
*/
