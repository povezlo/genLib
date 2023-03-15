import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CoursesService, IPreviewCoursesResponse, ICoursesPreview } from '../shared';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  courses$: Observable<ICoursesPreview[]> | null = null;
  dataSource: MatTableDataSource<ICoursesPreview> | null = null;

  private readonly subscription = new Subscription();

  constructor(private courses: CoursesService) {}

  ngOnInit(): void {
      const coursesSub = this.courses.getPreviewCourses()?.subscribe((res: IPreviewCoursesResponse) => {
      
      if(!res) {
        return;
      }
      
      const { courses } = res;

      this.dataSource = new MatTableDataSource<ICoursesPreview>(courses);
      this.dataSource.paginator = this.paginator;
      this.courses$ = this.dataSource.connect();
      } );

      this.subscription.add(coursesSub);
  }

    ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
      this.subscription.unsubscribe();
    }
  }
}
