import { Component, OnDestroy, OnInit, } from '@angular/core';
import { AuthService, CoursesService } from './services';
import { Observable, Subscription } from 'rxjs';
import { IPreviewCoursesResponse } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  courses$: Observable<IPreviewCoursesResponse> | null = null;

  private readonly subscription = new Subscription();

  constructor(private authService: AuthService, private courses: CoursesService) {}

  ngOnInit(): void {
    this.courses$ = this.courses.getPreviewCourses();
    this.autoLogin();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private autoLogin(): void {
      if(this.authService.isAuthenticated()) {
      return;
    }

    const authSub = this.authService.login().subscribe();
    
    this.subscription.add(authSub);
  }
}
