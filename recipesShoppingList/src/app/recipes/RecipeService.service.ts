import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';


export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Bacon-wrapped Burger Roll Recipe', 'Hot Italian Rolls', 
        'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg',
        [new Ingredient("tomatoes", 2),
        new Ingredient("bread", 1)])
        ,
        new Recipe('Supreme Pizza Recipe', 'Supreme Pizza a la Italian in New York', 
        'https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg',
        [new Ingredient("potatos", 2),
        new Ingredient("milk", 1)])
        ,

        new Recipe('Chicken Rolls Recipe', 'Chicken Rolls', 
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken-kathi-roll-recipe.jpg',
        [new Ingredient("meat", 5),
        new Ingredient("buns", 5),
        new Ingredient("mayo", 2),
        new Ingredient("lettuce", 1)
        ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}