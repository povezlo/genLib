import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CoursesService, ICoursesResponse, ICourses } from '../shared';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  courses$: Observable<ICourses[]> | null = null;
  dataSource: MatTableDataSource<ICourses> | null = null;

  private readonly subscription = new Subscription();

  constructor(private courses: CoursesService) {}

  ngOnInit(): void {
      const coursesSub = this.courses.getCourses()?.subscribe((res: ICoursesResponse) => {
      
      if(!res) {
        return;
      }
      
      const { courses } = res;

      this.dataSource = new MatTableDataSource<ICourses>(courses);
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
