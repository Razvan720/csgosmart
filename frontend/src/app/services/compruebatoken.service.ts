import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { GLoginUserGuard } from './glogin-user.guard';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class CompruebatokenService {

  constructor(private usuarioService: UsuarioService) { }

  intercept(req: any, next: any) {

    const tokenI = req.clone({
      setHeaders: {
        Authorization: 'miaplicacion' + this.usuarioService.getToken()
      }
    });
    return next.handle(tokenI);
  }
}
