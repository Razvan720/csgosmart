import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Arma } from '../models/Arma';


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

  saveArma(arma: Arma): Observable<any> {
    return this.http.post('http://localhost:3000/armas', arma);
  }

  deleteArma(id: String): Observable<any> {
    return this.http.delete('http://localhost:3000/armas/${id}');
  }

  updateArma(id: String, arma: Arma): Observable<any> {
    return this.http.put('http://localhost:3000/armas/${id}', arma);
  }
}
