import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistLessonsComponent } from './playlist-lessons.component';

describe('PlaylistLessonsComponent', () => {
  let component: PlaylistLessonsComponent;
  let fixture: ComponentFixture<PlaylistLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistLessonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
