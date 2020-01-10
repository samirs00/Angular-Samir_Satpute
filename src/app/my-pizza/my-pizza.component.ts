import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pizza',
  templateUrl: './my-pizza.component.html',
  styleUrls: ['./my-pizza.component.css']
})
export class MyPizzaComponent implements OnInit {

  // When we apply filter then call API and get data from Database
  // but in our case we use bellow array for show list of pizza
  pizzaList: any[] = [
    {
      name: "Batman pizza",
      price: 100,
      options: "Veg",
      pizzaType: "Cheese burst",
      pizzaBase: "Flat bread",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Classic Corn",
      price: 200,
      options: "Non Veg",
      pizzaType: "Cheese topping",
      pizzaBase: "Thin Crust",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Classic Tomato",
      price: 300,
      options: "Veg",
      pizzaType: "No cheese",
      pizzaBase: "Regular Base",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Margherita",
      price: 400,
      options: "Non Veg",
      pizzaType: "Cheese burst",
      pizzaBase: "Multigrain",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Double Cheese",
      price: 500,
      options: "Veg",
      pizzaType: "Cheese topping",
      pizzaBase: "Flat bread",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Soya Masala",
      price: 600,
      options: "Thin Crust",
      pizzaBase: "No cheese",
      pizzaType: "Cheese burst",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Spiced Paneer",
      price: 200,
      options: "Veg",
      pizzaType: "Cheese burst",
      pizzaBase: "Multigrain",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Chicken Sausage",
      price: 300,
      options: "Non Veg",
      pizzaType: "Cheese topping",
      pizzaBase: "Flat bread",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Country feast",
      price: 400,
      options: "Veg",
      pizzaType: "No cheese",
      pizzaBase: "Regular Base",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Farmers peak",
      price: 600,
      options: "Non Veg",
      pizzaType: "Cheese burst",
      pizzaBase: "Thin Crust",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Tandoori paneer",
      price: 100,
      options: "Veg",
      pizzaType: "Cheese burst",
      pizzaBase: "Flat bread",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Veggie Lover",
      price: 200,
      options: "Non Veg",
      pizzaType: "Cheese topping",
      pizzaBase: "Thin Crust",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Chicken Pepperoni",
      price: 300,
      options: "Veg",
      pizzaType: "No cheese",
      pizzaBase: "Regular Base",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Lebanese Chicken",
      price: 400,
      options: "Non Veg",
      pizzaType: "Cheese burst",
      pizzaBase: "Multigrain",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Spiced Chicken Meatballs",
      price: 500,
      options: "Veg",
      pizzaType: "Cheese topping",
      pizzaBase: "Flat bread",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Veg Exotica",
      price: 600,
      options: "Thin Crust",
      pizzaBase: "No cheese",
      pizzaType: "Cheese burst",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Smoke Chicken",
      price: 200,
      options: "Veg",
      pizzaType: "Cheese burst",
      pizzaBase: "Multigrain",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Tripple chicken",
      price: 300,
      options: "Non Veg",
      pizzaType: "Cheese topping",
      pizzaBase: "Flat bread",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Chicken Itallian",
      price: 400,
      options: "Veg",
      pizzaType: "No cheese",
      pizzaBase: "Regular Base",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Classic corn",
      price: 600,
      options: "Non Veg",
      pizzaType: "Cheese burst",
      pizzaBase: "Thin Crust",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Classic Tomato",
      price: 100,
      options: "Veg",
      pizzaType: "Cheese burst",
      pizzaBase: "Flat bread",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Double Cheese",
      price: 200,
      options: "Non Veg",
      pizzaType: "Cheese topping",
      pizzaBase: "Thin Crust",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Chicken Tikka",
      price: 300,
      options: "Veg",
      pizzaType: "No cheese",
      pizzaBase: "Regular Base",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Paneer Tikka",
      price: 400,
      options: "Non Veg",
      pizzaType: "Cheese burst",
      pizzaBase: "Multigrain",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Tomato tikka",
      price: 500,
      options: "Veg",
      pizzaType: "Cheese topping",
      pizzaBase: "Flat bread",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Double Tikka",
      price: 600,
      options: "Thin Crust",
      pizzaBase: "No cheese",
      pizzaType: "Cheese burst",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Onion pizza",
      price: 200,
      options: "Veg",
      pizzaType: "Cheese burst",
      pizzaBase: "Multigrain",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Chicken Sausage N Tikka",
      price: 300,
      options: "Non Veg",
      pizzaType: "Cheese topping",
      pizzaBase: "Flat bread",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Spiced Chicken Meatballs",
      price: 400,
      options: "Veg",
      pizzaType: "No cheese",
      pizzaBase: "Regular Base",
      image: "assets/images/batmanpizza.svg",
    },
    {
      name: "Pan Pizzas",
      price: 600,
      options: "Non Veg",
      pizzaType: "Cheese burst",
      pizzaBase: "Thin Crust",
      image: "assets/images/batmanpizza.svg",
    },


  ]
  constructor() { }

  
  ngOnInit() {
  }



  filterPizza(){
    
  }

}
