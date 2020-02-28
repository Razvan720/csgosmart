import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Caja } from '../modelo/Caja';


@Injectable({
  providedIn: 'root'
})
export class CajasService {

  constructor(private http: HttpClient) { }

  getCajas(): Observable<any> {
    return this.http.get('http://localhost:3000/cajas');
  }

  getCajasById(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/cajas/${id}`);
  }

  saveArma(caja: Caja): Observable<any> {
    return this.http.post('http://localhost:3000/cajas', caja);
  }

  deleteArma(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/cajas/${id}`);
  }

  updateArma(id: string, caja: Caja): Observable<any> {
    return this.http.put(`http://localhost:3000/armas/${id}`, caja);
  }
}
