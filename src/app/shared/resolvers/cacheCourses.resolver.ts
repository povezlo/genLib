import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { Observable } from "rxjs";
import { ICoursesResponse } from "../interfaces";
import { CoursesService } from "../services";


export const cacheCoursesResolver: ResolveFn<Observable<ICoursesResponse> | null> = () => {
  const courses = inject(CoursesService);
  console.log(courses.isCashing);
    if(courses.isCashing) {
      return courses.coursesCache$;
    } else {
      return courses.getCourses();
    }
}