import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpLoadingService } from './http-loading.service';

export const HTTP_LOADING = new HttpContextToken<boolean>(() => true);

export const httpLoadingInterceptor: HttpInterceptorFn = (req, next) => {
  const httpLoadingService = inject(HttpLoadingService);
  const acompanhar = req.context.get(HTTP_LOADING);

  if (acompanhar) {
    httpLoadingService.iniciarLoading();
  }

  return next(req).pipe(
    finalize(() => {
      if (acompanhar) {
        httpLoadingService.finalizarLoading();
      }
    }),
  );
};
