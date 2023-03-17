import { Component, Input } from '@angular/core';
import { ILesson } from '../../../shared/interfaces';

@Component({
  selector: 'app-video-lesson',
  templateUrl: './video-lesson.component.html',
  styleUrls: ['./video-lesson.component.scss']
})
export class VideoLessonComponent {
  @Input() lesson?: ILesson;
}
