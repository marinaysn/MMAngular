import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
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

  constructor() { }

  ngOnInit() {
  }

}
