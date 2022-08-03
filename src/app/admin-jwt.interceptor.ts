import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminAuthService } from './admin-auth.service';

@Injectable()
export class AdminJwtInterceptor implements HttpInterceptor {

  // constructor(private authService: AdminAuthService) {}
  constructor(private authService: AdminAuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(request.url)
    // if (request.url.includes("admin") && (this.authService.token !== undefined)) {
    //   console.log("intercepted, added jwt header")
    //   request.headers.append("Authorization", `Bearer ${this.authService.token}`)
    // }
    //    return next.handle(request);
      const userToken = this.authService.getToken();
      console.log("Token is : " + userToken);
      if(userToken === null) {
        return next.handle(request);
      }
      const modifiedReq = request.clone({ 
        headers: request.headers.set('Authorization', `Bearer ${userToken}`)
      });
      return next.handle(modifiedReq);

  }
}
