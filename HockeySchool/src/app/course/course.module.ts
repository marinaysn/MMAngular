import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { CourseComponent } from "./course.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [CourseComponent],
    exports: [CourseComponent]
}) 
export class CourseModule{}