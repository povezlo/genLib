import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILesson } from '../../../shared/interfaces';

@Component({
  selector: 'app-video-lessons',
  templateUrl: './video-lessons.component.html',
  styleUrls: ['./video-lessons.component.scss']
})
export class VideoLessonsComponent {
  @Input() lessons: ILesson[] = [];
  @Output() getOrder = new EventEmitter<number>();

  getOrders(index: number): void {
    this.getOrder.emit(index);
  }

  trackByFn(index: number, item: ILesson) {
    return item.id;
  }
}
