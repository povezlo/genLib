import { AfterViewInit, Component } from '@angular/core';

import { VideoPlayerService } from 'src/app/shared';
import { ILesson } from '../../../shared/interfaces';

@Component({
  selector: 'app-video-lessons',
  templateUrl: './video-lessons.component.html',
  styleUrls: ['./video-lessons.component.scss']
})
export class VideoLessonsComponent implements AfterViewInit {
  lessonsPlaylist: ILesson[] = [];

  constructor(private videoService: VideoPlayerService) {}

  ngAfterViewInit(): void {
    this.lessonsPlaylist = this.videoService.getLessonsPlayList();
  }

  getOrders(index: number): void {
    const lessson = this.lessonsPlaylist.find(lesson => lesson.order === index);
    console.log('get orders');
    if(lessson) this.videoService.setVideoLesson(lessson);
  }

  trackByFn(index: number, item: ILesson) {
    return item.order;
  }
}
