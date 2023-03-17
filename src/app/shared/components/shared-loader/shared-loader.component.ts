import { Component, Input } from '@angular/core';
import { SharedLoaderState } from './enum';

@Component({
  selector: 'app-shared-loader',
  templateUrl: './shared-loader.component.html',
  styleUrls: ['./shared-loader.component.scss'],
})
export class SharedLoaderComponent {
  @Input() state: SharedLoaderState = SharedLoaderState.loading;
  @Input() errorMessage = 'Error!';
  @Input() noDataMessage = 'Sorry, no data here.';
  sharedLoaderState = SharedLoaderState;
}
