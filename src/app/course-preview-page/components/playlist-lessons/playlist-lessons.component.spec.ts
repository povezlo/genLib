import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { VideoLessonsPlayerService } from 'src/app/shared/services';
import { lessonMockData, VideoLessonsPlayerMockService } from 'src/assets/tesing';

import { PlaylistLessonsComponent } from './playlist-lessons.component';
import { TransformTimePipe } from 'src/app/shared';

describe('PlaylistLessonsComponent', () => {
  let component: PlaylistLessonsComponent;
  let fixture: ComponentFixture<PlaylistLessonsComponent>;
  let videoLessonsPlayerService: VideoLessonsPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistLessonsComponent, TransformTimePipe ],
      providers: [{
        provide: VideoLessonsPlayerService,
        useClass: VideoLessonsPlayerMockService
      }],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(PlaylistLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getLessonsPlayList return lessons method on initialization', () => fakeAsync(() =>{
    videoLessonsPlayerService = TestBed.inject(VideoLessonsPlayerService);
    
    spyOn(videoLessonsPlayerService, 'getLessonsPlayList').and.callThrough();
    expect(component.lessonsPlaylist).toEqual([lessonMockData]);
  }));
})