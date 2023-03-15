import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './interceptors';
import { AuthService, TokenService } from './services'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
    providers: [
    {
      provide: 'ENV_API',
      useValue: environment.apiURL,
    },
    {
      provide: 'BASE_URL',
      useValue: environment.baseURL,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation): string => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation],
    },
        {
      provide: APP_INITIALIZER,
      useFactory: () => {
        console.log('init app ');
      },
      deps: [],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
