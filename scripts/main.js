/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand){

  var ace = [];

  for (i = 0; i > hand.length; i++) {
    while (hand[i] === "A") {
      hand.splice(i,1);
      ace.push("A");
    }
  }
  var sort = hand.concat.apply(hand, ace);

  var container = [];
  var total = 0;
  var alpha = ["J","Q","K"];

for (i = 0; i < hand.length; i++){
  if (sort[i] <= 10) {
    container.push(parseInt(sort[i]));
  }
  else if (alpha.indexOf(sort[i]) >= 0) {
    container.push(10);
  }
  else {
    if (11 <= (21-total) && sort.lastIndexOf("A") == i) {
      container.push(11);
    }
    else {
      container.push(1);
    }
   }
  getTotal(container);
}
function getTotal(container){
  total = 0;
  for (x = 0; x < container.length; x++) {
    total = total + container[x];
  }
}
console.log("Final: " + total);
return total;
}
/*Test data:
scoreHand(["J","A"]); => 21 */
/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
