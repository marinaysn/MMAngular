import { Ingredient } from '../shared/Ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

  
    
  ingridientAdded = new EventEmitter<Ingredient[]>();
  ingridientAdded2 = new EventEmitter<Ingredient[]>();
  
    private ingredients: Ingredient[] = [];

    private ingredients2: Ingredient[] = [
      new Ingredient('ground beef', 2),
      new Ingredient('eggs', 2),
      new Ingredient('breadcrumb', 1),
      new Ingredient('salt', 2),
      new Ingredient('pepper', 1),
      new Ingredient('garlic powder', 2),
      new Ingredient('ham', 4),
      new Ingredient('breadcrumb', 1),
      new Ingredient('cheddar cheese', 8),
      new Ingredient('spinach', 2),
      new Ingredient('bacon', 10)
    ];
  
  
    onAddItem(ingArr: Ingredient){
      
     this.ingredients.push(ingArr);
     this.ingredients2.push(ingArr);
     this.ingridientAdded.emit(this.ingredients.slice());
     this.ingridientAdded2.emit(this.ingredients2.slice());
    }

    getIngredient(){
      return this.ingredients.slice();
    }

    getIngredient2(){
      return this.ingredients2.slice();
    }
    
    
}