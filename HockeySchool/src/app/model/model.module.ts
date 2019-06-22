import { NgModule } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { CourseRepository } from "./course.repository";

@NgModule({
    providers: [ CourseRepository, StaticDataSource]
})

export class ModelModule{}