import { Component, Input } from '@angular/core';
import { ILesson } from '../../../shared/interfaces';

@Component({
  selector: 'app-video-lessons',
  templateUrl: './video-lessons.component.html',
  styleUrls: ['./video-lessons.component.scss']
})
export class VideoLessonsComponent {
  @Input() lessons: ILesson[] = [];
}
