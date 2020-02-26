import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TipogranadasService {

  constructor(private http: HttpClient) { }

  getTipogranadas(): Observable<any> {
    return this.http.get('http://localhost:3000/tipogranadas');
  }

  getTipogranadasById(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/tipogranadas/${id}`);
  }
}
