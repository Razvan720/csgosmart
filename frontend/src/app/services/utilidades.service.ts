import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Utilidad } from '../modelo/Utilidad';

@Injectable({
  providedIn: 'root'
})
export class UtilidadesService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getUtilidades(): Observable<any> {
    return this.http.get('http://localhost:3000/utilidades');
  }

  getUtilidadesById(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/utilidades/${id}');
  }

  saveUtilidad(utilidad: Utilidad): Observable<any> {
    return this.http.post('http://localhost:3000/utilidades', utilidad);
  }

  deleteUtilidads(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/utilidades/${id}');
  }

  updateUtilidad(id: string, utilidad: Utilidad): Observable<any> {
    return this.http.put('http://localhost:3000/utilidades/${id}', utilidad);
  }
}
