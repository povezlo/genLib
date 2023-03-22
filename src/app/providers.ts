import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_INITIALIZER } from "@angular/core";

import { TokenInterceptor, ErrorInterceptor, initApp, AuthService } from "./shared";
import { environment } from "src/environments/environment";
import { ENV_API, BASE_URL } from "src/assets/injectTokens/injectTokens";

export const PROVIDERS = [
    {
        provide: ENV_API,
        useValue: environment.apiURL,
    },
    {
        provide: BASE_URL,
        useValue: environment.baseURL,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true,
    },
    {
        provide: APP_INITIALIZER,
        useFactory: initApp,
        deps: [AuthService],
        multi: true
    },
];