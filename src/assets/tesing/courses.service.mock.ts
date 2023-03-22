import { Observable, of } from "rxjs";
import { ICoursesResponse, ICoursePreviewResponse } from "src/app/shared";
import { coursePreviewMockData, coursesResponseMockData } from "./mock-data";

export class CoursesMockService {
    getCourses(): Observable<ICoursesResponse> | null {
        return of(coursesResponseMockData);
    }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getPreviewCourse(id = ''): Observable<ICoursePreviewResponse> {
        return of(coursePreviewMockData);
    }
}