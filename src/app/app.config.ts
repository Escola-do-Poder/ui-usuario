import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { provideZard } from '@zard-ui/core/provider/providezard';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { httpErrorInterceptor } from './core/http/http-error.interceptor';
import { httpLoadingInterceptor } from './core/http/http-loading-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([httpLoadingInterceptor, httpErrorInterceptor])),
    provideZard(),
    provideEnvironmentNgxMask(),
  ],
};
