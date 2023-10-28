function PizzaOven(crustType, sauceType, cheeses,toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

var pizza_1 = PizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza_1);

var pizza_2 = PizzaOven("hand tossed", "marinara", ["mozzarella","feta"], ["mushrooms","olives", "onions"])
console.log(pizza_2)


var pizza_1 = PizzaOven("cream caramel", "Arabic salad", "alkaseeh", ["milkshake", "sausage"]);
console.log(pizza_3);

var pizza_1 = PizzaOven("flat dish", "pekka", "safra", ["pepperoni", "sausage"]);
console.log(pizza_3);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// random pizza generator
var available_options={
    crustType : ["deep dish","hand tossed","cream caramel","flat dish"],
    sauceType : ["traditional","marinara","rabic salad","pekka"],
    cheeses : ["mozzarella","feta","alkaseeh","safra"],
    toppings: [["pepperoni", "sausage"],["milkshake", "sausage"],["pepperoni", "sausage"],["mushrooms","olives", "onions"]]
}
var random_key, randomPizaa = {};
function random_pizza(){
    random_key = Math.floor(Math.random() * 4);
    return randomPizaa={
        crustType : available_options.crustType[random_key],
        sauceType : available_options.sauceType[random_key],
        cheeses : available_options.cheeses[random_key],
        toppings : available_options.toppings[random_key]
    }
}

randomPizaa_1 = random_pizza();
console.log(randomPizaa_1)

randomPizaa_2 = random_pizza();
console.log(randomPizaa_2)
//choose four random keys from a available_options bocket
// store these rando, keys each group in pizza-count
//return a complete pizaa object