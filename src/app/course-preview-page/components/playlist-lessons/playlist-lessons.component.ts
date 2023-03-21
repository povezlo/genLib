import { AfterViewInit, Component } from '@angular/core';

import { VideoLessonsPlayerService } from 'src/app/shared';
import { ILesson } from '../../../shared/interfaces';

@Component({
  selector: 'app-playlist-lessons',
  templateUrl: './playlist-lessons.component.html',
  styleUrls: ['./playlist-lessons.component.scss']
})
export class PlaylistLessonsComponent implements AfterViewInit {
  lessonsPlaylist: ILesson[] = [];

  constructor(private videoService: VideoLessonsPlayerService) {}

  ngAfterViewInit(): void {
    this.lessonsPlaylist = this.videoService.getLessonsPlayList();
  }

  getOrders(index: number): void {
    const lessson = this.lessonsPlaylist.find(lesson => lesson.order === index);
    if(lessson) this.videoService.setVideoLesson(lessson);
  }

  trackByFn(index: number, item: ILesson) {
    return item.order;
  }
}
