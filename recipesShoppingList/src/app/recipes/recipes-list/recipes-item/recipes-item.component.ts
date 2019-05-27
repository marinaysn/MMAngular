import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<void>();

  @Input() recipeItem: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected() {
    this.recipeSelected.emit()
  }
}
