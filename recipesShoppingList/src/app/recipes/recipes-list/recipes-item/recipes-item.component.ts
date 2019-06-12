import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../RecipeService.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {


 // @Output() recipeSelected = new EventEmitter<void>();

  @Input() recipeItem: Recipe;

  constructor( private recipeServ2: RecipeService) { }

  ngOnInit() {
  }

  onRecipeSelected() {
   // this.recipeSelected.emit()

   this.recipeServ2.recipeSelected.emit(this.recipeItem)
  }
}
