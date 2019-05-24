import { Component } from '@angular/core';
import { Model, TodoItem } from "./model";
import { isNgTemplate } from '@angular/compiler';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';


@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  model = new Model();


  getName() {
    return this.model.user;
  }

  getTodoItems(){
    // return this.model.items.filter((i: { done: boolean; }) =>!i.done);
    return this.model.items;
  }
  addTodoItem(item) {
    if (item !==""){
      this.model.items.push(new TodoItem(item, false));
    }
  }
}
