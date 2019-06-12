import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';


export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Bacon-wrapped Burger Roll Recipe', 'Hot Italian Rolls', 
        'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg')
        ,
        new Recipe('Supreme Pizza Recipe', 'Supreme Pizza a la Italian in New York', 
        'https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg')
        ,
        new Recipe('Chicken Rolls Recipe', 'Chicken Rolls', 
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken-kathi-roll-recipe.jpg')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}