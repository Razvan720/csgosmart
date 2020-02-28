import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Update } from '../modelo/Update';

@Injectable({
  providedIn: 'root'
})
export class UpdatesService {

  constructor(private http: HttpClient) { }

  getUpdates(): Observable<any> {
    return this.http.get('http://localhost:3000/updates');
  }

  getUpdatesById(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/updates/${id}`);
  }

  saveUpdates(update: Update): Observable<any> {
    return this.http.post('http://localhost:3000/updates', update);
  }

  deleteUpdates(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/updates/${id}`);
  }

  updateUpdates(id: string, update: Update): Observable<any> {
    return this.http.put(`http://localhost:3000/updates/${id}`, update);
  }
}
