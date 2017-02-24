//java for pizza hw5
var yourpizza = "";

function newList(order) {
  yourpizza = yourpizza + order;
  document.getElementById("userOrder").innerHTML = yourpizza;
  
}
newList("")

var pizzaTotal = 0;
var tax = 0;
var fprice = 0;

function updateTotal(cost) {
  pizzaTotal = pizzaTotal + cost;
  tax = tax + (pizzaTotal*0.12);
  fprice = tax + pizzaTotal;
  document.getElementById("pizzaTotal").innerHTML = pizzaTotal;
  document.getElementById("tax").innerHTML = tax;
  document.getElementById("test").innerHTML = fprice;
  //alert("Total Price Is:" + fprice);
 // return pizzaTotal;

}


// function totalTax(value) {
//   tax = tax + (value * 0.12) ;
//   document.getElementById("tax").innerHTML = tax;
//   return tax;
// }

  
//   function finalprice(valueTax,valuePizzaTotal) {
//  // fprice = tax + pizzaTotal;
//   document.getElementById("finalsaleprice").innerhtml = tax;
//   alert("insidefinalprice");

//   }
 

updateTotal(0);
//totalTax(0);
document.getElementById("gp").onclick = function() {
  updateTotal(1);
  newList("Green Peppers");
  //totalTax(1);
  //finalprice(tax,pizzaTotal);
};
document.getElementById("mushrooms").onclick = function() {
  updateTotal(1);
  newList("Mushrooms");
  //totalTax(1);
  //finalprice(tax,pizzaTotal);
};
document.getElementById("pepperoni").onclick = function() {
  updateTotal(2)
  newList("Pepperoni");
  //totalTax(2);
 // finalprice(tax,pizzaTotal);
};
document.getElementById("olives").onclick = function() {
  updateTotal(2)
  newList("Olives, ");
  //totalTax(2);
  //finalprice(tax,pizzaTotal);
};
document.getElementById("cheese").onclick = function() {
  updateTotal(2)
  newList("Extra Cheese, ")
  //totalTax(2);
 // finalprice(tax,pizzaTotal);
};
document.getElementById("clear").onclick = function(){
    pizzaTotal = 0;
    yourpizza = "";
  newList("");
  updateTotal(0);
  //totalTax(0);
  //finalprice(tax,pizzaTotal);
  console.log("testclear")
};
	function placeOrder() {
  
  var myString = document.getElementById("order").value;
	var Order = myString.split(",");

  for (var i=0; i<Order.length; i++) {
		Order[i] = Order[i].trim();
    if( Order[i] == "mushrooms")
    {
      updateTotal(1);
    newList("Mushrooms, ");
  }
  else if ( Order[i] == "green pepper")
    {
      updateTotal(1);
    newList("Green Pepper, ");
  }
  else if ( Order[i] == "pepperoni")
    {
      updateTotal(2);
    newList("Pepperoni, ");
  }
  else if ( Order[i] == "olives")
    {
      updateTotal(2);
    newList("Olives, ");
  }
  else if ( Order[i] == "extra cheese")
    {
      updateTotal(2);
    newList("Extra Cheese, ");
  }

    else
      document.getElementById("userOrder").innerHTML = "topping not test available";
    
}
};


