import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { CourseComponent } from "./course.component";
import { FormsModule } from "@angular/forms";
import { CounterDirective } from "./counter.diretive";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [CourseComponent, CounterDirective],
    exports: [CourseComponent]
}) 
export class CourseModule{}