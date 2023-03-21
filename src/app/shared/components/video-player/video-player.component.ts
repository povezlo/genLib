import { 
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  OnDestroy,
} from '@angular/core';

import { MatTooltip } from '@angular/material/tooltip';
import { Subscription } from 'rxjs';
import Hls from 'hls.js';

import { VideoPlayerService } from '../../services';
import { ILesson } from '../../interfaces';

const HLS_MEDIA_TYPE = 'application/vnd.apple.mpegurl';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  @Input() id = '';
  @Input() url = '';
  @Input() poster?: string;
  @Input() title?: string;
  @Input() unmuted = false;
  @Input() autoplay = false;
  @Input() isPopup = false;
  @ViewChild('videoPlayer', { static: true }) videoElementRef!: ElementRef; 
  @ViewChild(MatTooltip, { static: true }) tooltip!: MatTooltip;

  videoPlayer!: HTMLVideoElement;

  private readonly subscription = new Subscription();

  private hls = new Hls();
  private defaultPlaybackRate = 0;
  
  constructor(private playerService: VideoPlayerService) { }

  
  ngAfterViewInit(): void {
    this.initVideoElement();
    this.setConfigs();
    this.startVideoPlayer();

    const updateVideoSub = this.playerService.getVideoLesson()
    .subscribe(lesson => {
      if(!lesson) return;
      this.updateVideoLesson(lesson);
    });

    this.subscription.add(updateVideoSub);
  }

  private initVideoElement(): void {
    this.videoPlayer = this.videoElementRef?.nativeElement;
  }

  private startVideoPlayer(): void {
    if (Hls.isSupported()) {
      this.hls.loadSource(this.url);
      this.hls.attachMedia(this.videoPlayer);
      this.videoPlayer.currentTime = this.getProgress();

      this.videoPlayer.addEventListener('pause', () => this.saveProgress());
    }

    else if (this.videoPlayer.canPlayType(HLS_MEDIA_TYPE)) {
      this.videoPlayer.src = this.url;
    }
  }

  private setConfigs(lesson?: ILesson): void {
    if(this.poster)  this.videoPlayer.poster = lesson ? lesson.previewImageLink + '/cover.webp' : this.poster;
    this.videoPlayer.autoplay = lesson ? true : this.autoplay;
    this.videoPlayer.muted = lesson ? false : this.unmuted;
    this.defaultPlaybackRate = this.videoPlayer.defaultPlaybackRate;
  }

  private updateVideoLesson(lesson: ILesson): void {
    if(this.isPopup) return;
    this.id = lesson.id;
    this.title = lesson.title;
    this.url = lesson.link;
    this.setConfigs(lesson);
    this.startVideoPlayer();
  }

  private getProgress(): number {
    return Number(localStorage.getItem(this.id)) || 0;
  }

  private saveProgress(): void {
    localStorage.setItem(this.id, String(this.videoPlayer.currentTime));
  }

  setPlaybackRate(event: KeyboardEvent): void {
    switch (event.key) {
      case '0':
        this.videoPlayer.playbackRate = this.defaultPlaybackRate;
        this.tooltip.show();
        break;
      case '2':
        if (event.shiftKey) {
          this.videoPlayer.playbackRate = 2;
          this.tooltip.show();
        }
        break;
      case '+':
        this.videoPlayer.playbackRate += 0.25;
          this.tooltip.show();
        break;
      case '-':
        this.videoPlayer.playbackRate -= 0.25;
          this.tooltip.show();
        break;
    }
  }

  ngOnDestroy(): void {
    if (this.hls) {
      this.hls.destroy();
    }
    this.playerService.resetVideoLesson();
    this.subscription.unsubscribe();
  }
}