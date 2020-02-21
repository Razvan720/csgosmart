import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Mapa } from '../modelo/Mapa';

@Injectable({
  providedIn: 'root'
})
export class MapasService {

  constructor(private http: HttpClient) { }

  getMapas(): Observable<any> {
    return this.http.get('http://localhost:3000/mapas');
  }

  getMapasById(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/mapas/${id}');
  }

  saveMapa(mapa: Mapa): Observable<any> {
    return this.http.post('http://localhost:3000/mapas', mapa);
  }

  deleteMapa(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/cajas/${id}');
  }

  updateMapa(id: string, mapa: Mapa): Observable<any> {
    return this.http.put('http://localhost:3000/armas/${id}', mapa);
  }
}
