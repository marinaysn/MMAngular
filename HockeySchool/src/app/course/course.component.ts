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
    public coursesPerPage = 4;
    public selectedPage = 1;
    
    constructor(private repo: CourseRepository){}

    get courses(): Course[] {
        let pageIndex = (this.selectedPage - 1) * this.coursesPerPage;
        return this.repo.getCourses(this.selectedCategory)
        .slice(pageIndex, pageIndex+ this.coursesPerPage);
    }

    get categories(): string[] {
        return this.repo.getCategories();
    }

    changeCategory(newCat?: string){
        this.selectedCategory = newCat;
    }

    changePage(page: number){
        this.selectedPage = page;
    }

    changePageSize(size: number){
        this.coursesPerPage = Number(size);
        this.changePage(1);
    }

    get pageCount(): number {
        return Math.ceil(this.repo
            .getCourses(this.selectedCategory)
            .length / this.coursesPerPage)
    }
}