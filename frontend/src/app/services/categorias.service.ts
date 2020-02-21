import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<any> {
    return this.http.get('http://localhost:3000/categorias');
  }

  getCategoriasById(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/categorias/${id}');
  }
}
