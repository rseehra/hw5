//java for pizza hw5
var yourpizza = "";

function newList(order) {
  yourpizza = yourpizza + order;
  document.getElementById("userOrder").innerHTML = yourpizza;
}
newList("")

var pizzaTotal = 0;

function updateTotal(cost) {
  pizzaTotal = pizzaTotal + cost;
  document.getElementById("pizzaTotal").innerHTML = pizzaTotal;
}
updateTotal(0)
document.getElementById("gp").onclick = function() {
  updateTotal(1);
  newList("Green Peppers");
};
document.getElementById("mushrooms").onclick = function() {
  updateTotal(1);
  newList("Mushrooms");
};
document.getElementById("pepperoni").onclick = function() {
  updateTotal(2)
  newList("Pepperoni");
};
document.getElementById("olives").onclick = function() {
  updateTotal(2)
  newList("Olives, ");
};
document.getElementById("cheese").onclick = function() {
  updateTotal(2)
  newList("Extra Cheese, ")
};
document.getElementById("clear").onclick = function(){
    pizzaTotal = 0;
    yourpizza = "";
  newList("");
  updateTotal(0);
  console.log("testclear")
};

