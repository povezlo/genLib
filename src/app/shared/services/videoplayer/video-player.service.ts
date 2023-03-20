import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {
  updateVideoPlayerStartSource$ = new Subject<void>();
  updateVideoPlayerStart$ = this.updateVideoPlayerStartSource$.asObservable();
}
