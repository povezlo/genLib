import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { ILesson } from "src/app/shared";
import { lessonMockData } from "./mock-data";

export class VideoLessonsPlayerMockService {

  getLessonsPlayList(): ILesson[] {
    return [lessonMockData];
  } 

  getVideoLesson(): Observable<ILesson | null> {
    return of(lessonMockData);
  }
}