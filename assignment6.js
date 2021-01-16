// Assignement 5 code.
class Sandwich {
	constructor(price){
		this.price = price;		
	}


}
Sandwich.prototype.toString = function() {
  return "Sandwich $" + this.price;
}

class Burger extends Sandwich {
	constructor(price, lettuce, meat) {
		super(price);
		this.lettuce = lettuce;
		this.meat = meat;
	}
}

Burger.prototype.toString = function() {
  return "Burger $" + this.price;
}

class CheeseBurger extends Burger {
  constructor(price, lettuce, meat, cheese) {
    super(price, lettuce, meat);
    this.cheese = cheese;
  }
}

CheeseBurger.prototype.toString = function() {
  return "Cheeseburger $" + this.price;
}

class Order {
  constructor(sandwich) {
    this.sandwich = [];
  }
  
  get price() {
    let total = 0;
	let price;
    
    this.sandwich.forEach( sandwich => {
		price = Number(sandwich.price);
		total += sandwich.price;
    });

    return total.toFixed(2);
  }
}

Order.prototype.add = function(sandwich) {
  this.sandwich.push(sandwich);
} //End Assignment 5 code.


//Beginning of Assignment 6 code.
let order = new Order();

function registerEventListeners() {
	document.getElementById("btnAdd").addEventListener("click", UpdateOrder);
}

function UpdateOrder() {
	clearOutput();
	addToOrder();
	updateList();
}

	//adds new order to the order "sandwich" array.
function addToOrder() { 
	let placeorder;
	let item = document.getElementById("item").value;
	let lettuce = document.getElementById("lettuce");
	let meat = document.getElementById("meat");
	let cheese = document.getElementById("cheese").value;
	if (item === "burger" && cheese != "none") {
		placeorder = new CheeseBurger(4.49, lettuce, meat, cheese);
	} else if (item === "burger") {
		placeorder = new Burger(3.99, lettuce, meat, cheese);
	} else {
		placeorder = new Sandwich (2.99, lettuce, meat, cheese);
	}
	order.add(placeorder);
}

  // creates element(li), then text node, then appends to element, then appends element to Id "output".
function updateList() { 
	for (let i = 0; i < order.sandwich.length; i++) {
		let whatkind;
		
			// used to determine what kind of food is inserted into "list" element along with price.
		if (order.sandwich[i]["price"] == "2.99") { 
			whatkind = "Sandwich";
		} else if (order.sandwich[i]["price"] == "3.99") {
			whatkind = "Burger";
		} else {
			whatkind = "CheeseBurger";
		}
		let para = document.createElement("li");
		let node = document.createTextNode(whatkind + " " + order.sandwich[i]["price"]);
		para.appendChild(node);		
		let element = document.getElementById("output");
		element.appendChild(para);
	}
	document.getElementById("total").textContent = "Total: $" + order.price;
}