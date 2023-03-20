import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {
  updateVideoPlayerStartSource$ = new Subject<void>();
  updateVideoPlayerStart$: Observable<void>;

  constructor() {
    this.updateVideoPlayerStart$ = this.updateVideoPlayerStartSource$.asObservable();
  }
}
