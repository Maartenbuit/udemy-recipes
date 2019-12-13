import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe(
      '111a Test recipe',
      '11this is a test',
      'https://get.pxhere.com/photo/restaurant-dish-meal-food-produce-kitchen-recipe-healthy-snack-meat-lunch-cuisine-health-hamburger-sandwich-exotic-slider-veggie-burger-1053018.jpg'
    ),
    new Recipe(
      '222a Test recipe',
      '22this is a test',
      'https://get.pxhere.com/photo/restaurant-dish-meal-food-produce-kitchen-recipe-healthy-snack-meat-lunch-cuisine-health-hamburger-sandwich-exotic-slider-veggie-burger-1053018.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
