import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios');
  }

  getUsuariosById(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios/${id}');
  }

  saveUsuarios(usuario: Usuario): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios', usuario);
  }

  deleteUsuarios(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/usuarios/${id}');
  }

  updateUsuarios(id: string, usuario: Usuario): Observable<any> {
    return this.http.put('http://localhost:3000/usuarios/${id}', usuario);
  }

  getLogin(usuario: Usuario): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios/login/', usuario);
  }

  logIn() {
    return !! localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
