import {
  HttpContextToken,
  HttpErrorResponse,
  HttpInterceptorFn,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { toast } from 'ngx-sonner';

export const HTTP_ERROR_MESSAGE = new HttpContextToken<string | null>(() => null);
export const HTTP_ERROR_TOAST = new HttpContextToken<boolean>(() => true);

const obterMensagemErro = (error: HttpErrorResponse, mensagemPersonalizada: string | null): string => {
  if (mensagemPersonalizada) {
    return mensagemPersonalizada;
  }

  if (typeof error.error === 'string' && error.error.trim().length > 0) {
    return error.error;
  }

  if (error.error && typeof error.error.message === 'string' && error.error.message.trim().length > 0) {
    return error.error.message;
  }

  switch (error.status) {
    case 0:
      return 'Não foi possível conectar ao servidor.';
    case 400:
      return 'Requisição inválida.';
    case 401:
      return 'Você precisa estar autenticado.';
    case 403:
      return 'Você não tem permissão para esta ação.';
    case 404:
      return 'Recurso não encontrado.';
    case 409:
      return 'Conflito de dados.';
    case 422:
      return 'Dados inválidos.';
    case 500:
      return 'Erro interno no servidor.';
    case 503:
      return 'Serviço indisponível.';
    default:
      return 'Erro inesperado. Tente novamente.';
  }
};

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const exibirToast = req.context.get(HTTP_ERROR_TOAST);
  const mensagemPersonalizada = req.context.get(HTTP_ERROR_MESSAGE);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (exibirToast) {
        toast.error('Ocorreu um problema!', {
          description: obterMensagemErro(error, mensagemPersonalizada),
        });
      }

      return throwError(() => error);
    }),
  );
};
