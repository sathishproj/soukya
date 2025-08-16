import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const isApi = req.url.startsWith('/api');
  const apiReq = isApi ? req.clone({ url: environment.apiBase + req.url }) : req;
  return next(apiReq);
};
