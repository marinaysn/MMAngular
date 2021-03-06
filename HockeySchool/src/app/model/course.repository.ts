import { Injectable } from "@angular/core";

import { StaticDataSource } from "./static.datasource";
import { Course } from "./course.model";

@Injectable()
export class CourseRepository {
    private courses: Course[] = [];
    private categories: string[] =[];

    constructor (private dataSource: StaticDataSource){
        dataSource.getCourse().subscribe(data => {
            this.courses = data;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getCourses(category: string = null): Course [] {
        return this.courses.filter(p => category == null || category == p.category);
    }

    getCourse(id: number): Course {
        return this.courses.find(p => p.id == id);
    }

    getCategories(): string [] {
        return this.categories;
    }
}