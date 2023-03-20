import { Component, Input } from '@angular/core';

import { ICourses } from '../../../shared/interfaces';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input() course: ICourses | null = null; 
}
