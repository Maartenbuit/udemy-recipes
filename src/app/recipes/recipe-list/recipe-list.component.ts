import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('a Test recipe',
      'this is a test',
      'https://get.pxhere.com/photo/restaurant-dish-meal-food-produce-kitchen-recipe-healthy-snack-meat-lunch-cuisine-health-hamburger-sandwich-exotic-slider-veggie-burger-1053018.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {

  }
}
