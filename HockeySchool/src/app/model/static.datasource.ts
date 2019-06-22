import { Observable, from } from "rxjs";
import { Injectable } from "@angular/core";
import { Course } from "./course.model";

@Injectable()
export class StaticDataSource {
    private Courses: Course[] = [
        new Course(1, "Course 1", "Category 1", "Course 1 (Category 1)", 100, "any"),
        new Course(2, "Course 2", "Category 1", "Course 2 (Category 1)", 100, "any"),
        new Course(3, "Course 3", "Category 1", "Course 3 (Category 1)", 100, "any"),
        new Course(4, "Course 4", "Category 1", "Course 4 (Category 1)", 100, "any"),
        new Course(5, "Course 5", "Category 1", "Course 5 (Category 1)", 100, "any"),
        new Course(6, "Course 6", "Category 2", "Course 6 (Category 2)", 150, "Bob"),
        new Course(7, "Course 7", "Category 2", "Course 7 (Category 2)", 150, "Bob"),
        new Course(8, "Course 8", "Category 2", "Course 8 (Category 2)", 150, "Bob"),
        new Course(9, "Course 9", "Category 2", "Course 9 (Category 2)", 150, "Bob"),
        new Course(10, "Course 10", "Category 2", "Course 10 (Category 2)", 150, "Bob"),
        new Course(11, "Course 11", "Category 3", "Course 11 (Category 3)", 200, "Rick"),
        new Course(12, "Course 12", "Category 3", "Course 12 (Category 3)", 200, "Rick"),
        new Course(13, "Course 13", "Category 3", "Course 13 (Category 3)", 200, "Rick"),
        new Course(14, "Course 14", "Category 3", "Course 14 (Category 3)", 200, "Rick"),
        new Course(15, "Course 15", "Category 3", "Course 15 (Category 3)", 200, "Rick"),
        ];

      getCourse(): Observable<Course[]>{
          return from([this.Courses])
      }  
}