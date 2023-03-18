import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedLoaderState } from '../../components';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderStateSource$ = new BehaviorSubject<SharedLoaderState>(SharedLoaderState.loading);
  loaderState$ = this.loaderStateSource$.asObservable();
}
