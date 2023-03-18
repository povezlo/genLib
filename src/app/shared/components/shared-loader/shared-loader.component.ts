import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../services';
import { SharedLoaderState } from './enum';

@Component({
  selector: 'app-shared-loader',
  templateUrl: './shared-loader.component.html',
  styleUrls: ['./shared-loader.component.scss'],
})
export class SharedLoaderComponent implements OnInit {  
  sharedLoaderState = SharedLoaderState;
  state$: Observable<SharedLoaderState> | null = null;

  constructor(private loader: LoaderService) {}

  ngOnInit(): void {
    this.state$ = this.loader.loaderState$;
  }
}
