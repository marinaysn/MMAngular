import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model'
import { ShoppingListService } from './ShoppingListService.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  ingredients2: Ingredient[];

  constructor( private shopList: ShoppingListService) { }

  ngOnInit() {

  this.ingredients =  this.shopList.getIngredient();
  this.ingredients2 =  this.shopList.getIngredient2();

  this.shopList.ingridientAdded
  .subscribe(
    (ingredients: Ingredient[]) =>{
      this.ingredients = ingredients;
    }
  )

  this.shopList.ingridientAdded2
  .subscribe(
    (ingredients: Ingredient[]) =>{
      this.ingredients2 = ingredients;
    }
  )


  }

  // onNotify(ingArr: Ingredient){
      
  //   this.ingredients.push(ingArr);
  //   this.ingredients2.push(ingArr);
  //  }

}
