import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLoaderComponent } from './shared-loader.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  declarations: [SharedLoaderComponent],
  exports: [SharedLoaderComponent],
})
export class SharedLoaderModule { }
