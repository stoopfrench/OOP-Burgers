//PART 1

class FoodItem {

	constructor(name, calories, vegan, glutenFree) {

		this.name = name
		this.calories = calories
		this.vegan = vegan
		this.glutenFree = glutenFree
	}

	stringify(FoodItem) {

		if(this.vegan === true && this.glutenFree === true) {

			return `${this.name} has ${this.calories} calories, is vegan, and is gluten free.`
		}

		else if (this.vegan === false && this.glutenFree === false) {

			return `${this.name} has ${this.calories} calories, is not vegan, and is not gluten free.`
		}

		else if (this.vegan === true && this.glutenFree === false) {

			return `${this.name} has ${this.calories} calories, is vegan, and is not gluten free.`
		}

		else if (this.vegan === false && this.glutenFree === true) {

			return `${this.name} has ${this.calories} calories, is not vegan, and is gluten free.`
		}

		
	}


}
	var lettuce = new FoodItem('Lettuce', 10, true, true)

		// console.log(lettuce.stringify())

	var tomato = new FoodItem('Tomato', 10, true, true)

		// console.log(tomato.stringify())

	var croutons = new FoodItem('Croutons', 60, true, false)

		// console.log(croutons.stringify())

	var cheese = new FoodItem('Cheese', 80, false, true)

		// console.log(cheese.stringify())

	var buns = new FoodItem('Whole Wheat Bun', 50, true, false)

		// console.log(buns.stringify())

	var meat = new FoodItem('Meat', 300, false, true)

		// console.log(meat.stringify())

	var frenchFries = new FoodItem('French Fries', 500, true, false)

		// console.log(frenchFries.stringify())


	

//PART 2

class Plate {

	constructor(name, desciption, price, ingredients) {

		this.name = name
		this.desciption = desciption
		this.price = price
		this.ingredients = ingredients
	}

	stringify(plate) {

		var output = `The ${this.name} is a ${this.desciption} with `
		 for(var i = 0; i < this.ingredients.length; i++) {
			output += this.ingredients[i].stringify()
		 	}
		 	output += `$${this.price}.`
		 	
		 	return output
		
	}
}

var burgerPlate = new Plate('Burger Plate', 'simple cheeseburger', 12, [buns, meat, cheese, frenchFries])
	
	// console.log(burgerPlate.stringify())

var saladPlate = new Plate('Salad Plate', 'simple house salad', 8, [lettuce, tomato, cheese, croutons])

	// console.log(saladPlate.stringify())


class Menu {

	constructor(name, plates) {

		this.name = name
		this.plates = plates
	}

	stringify(menu) {

		var output = `${this.name} contains the following items: `
		 
		 for(var i = 0; i < this.plates.length; i++) {
			
			output += this.plates[i].stringify()
		 }
		 	
		 	return output
		
	}

		
}


var lunchMenu = new Menu('Lunch Menu', [burgerPlate, saladPlate])

	// console.log(lunchMenu.stringify())


class Restaurant {

	constructor(name, desciption, menu) {

		this.name = name
		this.desciption = desciption
		this.menu = menu
	}

	stringify(restaurant) {

		var output = `${this.name} is ${this.desciption} check out our menus: `
		 
		 for(var i = 0; i < this.menu.length; i++) {
			
			output += this.menu[i].stringify()
		 }
		 	
		 	return output


	}
}

var americana = new Restaurant('Americana', 'a Classic Americana Restaurant with a maniacally focused menu', [lunchMenu])


	console.log(americana.stringify())












