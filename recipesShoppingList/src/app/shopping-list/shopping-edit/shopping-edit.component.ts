import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 
  printNameRef: string = "";
  printAmountRef: string = "";

  ingridience = [];

  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('nameInput') nameInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }
 
  onNameInput(){
    console.log('1111' + this.nameInputRef.nativeElement.value);

    this.printNameRef = this.nameInputRef.nativeElement.value;
    this.printAmountRef = " - " + this.amountInputRef.nativeElement.value;

    this.ingridience.push({name: this.printNameRef, num: this.printAmountRef})
  }

  onDelete() {
    this.ingridience = [];
  }
}
