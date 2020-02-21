import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Arma } from '../modelo/Arma';


@Injectable({
  providedIn: 'root'
})
export class ArmasService {

  constructor(private http: HttpClient) { }

  getArmas(): Observable<any> {
    return this.http.get('http://localhost:3000/armas');
  }

  getArmasById(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/armas/${id}');
  }

  getArmasByCategoria(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/armas/categoria${id}');
  }

  saveArma(arma: Arma): Observable<any> {
    return this.http.post('http://localhost:3000/armas', arma);
  }

  deleteArma(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/armas/${id}');
  }

  updateArma(id: string, arma: Arma): Observable<any> {
    return this.http.put('http://localhost:3000/armas/${id}', arma);
  }
}

