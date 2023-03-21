import { TestBed } from '@angular/core/testing';

import { VideoLessonsPlayerService } from './video-lessons-player.service';

describe('VideoPlayerService', () => {
  let service: VideoLessonsPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoLessonsPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
