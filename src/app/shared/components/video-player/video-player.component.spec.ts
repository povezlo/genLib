import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerComponent } from './video-player.component';

describe('VideoPlayerComponent', () => {
  let component: VideoPlayerComponent;
  let fixture: ComponentFixture<VideoPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayerComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(VideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
