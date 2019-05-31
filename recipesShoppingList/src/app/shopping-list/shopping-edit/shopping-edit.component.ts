import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 
  printNameRef: string = "";
  printAmountRef: number;

  ingridient = [];
  @Output() ingridientAdded = new EventEmitter<Ingredient>();

  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('nameInput') nameInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }
 
  onNameInput(){
    console.log('1111' + this.nameInputRef.nativeElement.value);

    this.printNameRef = this.nameInputRef.nativeElement.value + " - ";
    this.printAmountRef = this.amountInputRef.nativeElement.value;

    this.ingridient.push({name: this.printNameRef, num: this.printAmountRef})
    const ing = new Ingredient(this.printNameRef, this.printAmountRef);
    this.ingridientAdded.emit(ing);
  }

  onDelete() {
    this.ingridient = [];
  }
}
