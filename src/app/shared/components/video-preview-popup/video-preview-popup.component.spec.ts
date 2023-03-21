import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPreviewPopupComponent } from './video-preview-popup.component';

describe('VideoPreviewPopupComponent', () => {
  let component: VideoPreviewPopupComponent;
  let fixture: ComponentFixture<VideoPreviewPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPreviewPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPreviewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
