import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CoursesService, ICoursesResponse, ICourses, LoaderService } from '../shared';
import { SharedLoaderState } from '../shared/components';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  courses$: Observable<ICourses[]> | null = null;
  dataSource: MatTableDataSource<ICourses> | null = null;
  
  sharedLoaderState = SharedLoaderState;

  private readonly subscription = new Subscription();

  constructor(private courses: CoursesService, private loader: LoaderService) {}

  ngOnInit(): void {
      this.loader.loaderStateSource$.next(SharedLoaderState.loading);
      const coursesSub = this.courses.getCourses()?.subscribe((res: ICoursesResponse) => {
      
      if(!res) {
        this.loader.loaderStateSource$.next(SharedLoaderState.noData);
        return;
      }
      
      const { courses } = res;

      this.dataSource = new MatTableDataSource<ICourses>(courses);
      this.dataSource.paginator = this.paginator;
      this.courses$ = this.dataSource.connect();

      this.loader.loaderStateSource$.next(SharedLoaderState.loaded);
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
