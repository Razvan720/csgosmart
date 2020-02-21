import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { TipoGranada } from '../modelo/TipoGranada';

@Injectable({
  providedIn: 'root'
})
export class TipogranadasService {

  constructor(private http: HttpClient) { }

  getTipogrnadas(): Observable<any> {
    return this.http.get('http://localhost:3000/tipogranadas');
  }

  getTipogrnadasById(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/tipogranadas/${id}');
  }
}
