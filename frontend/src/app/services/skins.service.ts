import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Skin } from '../modelo/Skin';

@Injectable({
  providedIn: 'root'
})
export class SkinsService {

  constructor(private http: HttpClient) { }

  getSkins(): Observable<any> {
    return this.http.get('http://localhost:3000/skins');
  }

  getSkinsById(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/skins/${id}');
  }

  saveSkin(skin: Skin): Observable<any> {
    return this.http.post('http://localhost:3000/skins', skin);
  }

  deleteSkin(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/skins/${id}');
  }

  updateSkin(id: string, skin: Skin): Observable<any> {
    return this.http.put('http://localhost:3000/skins/${id}', skin);
  }
}
