import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { ILesson } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {
  private lessonsPlaylist: ILesson[] = [];

  private currentVideoSubject = new BehaviorSubject<ILesson | null>(null);

  getLessonsPlayList(): ILesson[] {
    return this.lessonsPlaylist;
  } 

  setLessonsPlaylist(lessons: ILesson[]): void {
    this.lessonsPlaylist = lessons;
  }

  getVideoLesson(): Observable<ILesson | null> {
    return this.currentVideoSubject.asObservable();
  }

  setVideoLesson(videoLesson: ILesson) {
    return this.currentVideoSubject.next(videoLesson);
  }
}
