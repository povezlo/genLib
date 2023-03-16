import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ILesson } from '../../../shared/interfaces'

@Component({
  selector: 'app-video-lesson',
  templateUrl: './video-lesson.component.html',
  styleUrls: ['./video-lesson.component.scss']
})
export class VideoLessonComponent implements AfterViewInit {
  @Input() lesson?: ILesson
  @ViewChild('myPlayer', {static: false}) player: ElementRef | null = null;

  ngAfterViewInit(): void {
    console.log();
}
}
