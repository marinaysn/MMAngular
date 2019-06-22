import { Component } from "@angular/core";
import { CourseRepository } from "../model/course.repository";
import { Course } from "../model/course.model";

@Component({
    selector: "course",
    templateUrl: "course.component.html",
    styleUrls: ["course.component.css"]
})

export class CourseComponent{

    public selectedCategory = null;
    
    constructor(private repo: CourseRepository){}

    get courses(): Course[] {
        return this.repo.getCourses();
    }

    get categories(): string[] {
        return this.repo.getCategories();
    }
}