import { Injectable } from '@angular/core';
import { Token } from '../modelo/Token';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {

  constructor() { }

  readToken(): Observable<any> {
    let resultado;
    const conexion = this.createBBDD();
    conexion.onsuccess = function () {
      this.result.transaction('session', 'readwrite').objectStore('session').get('session_token').onsuccess = function () {
        resultado = this.result;
      };
    };
    conexion.onerror = function () {
      resultado = this.error;
    }
    return resultado;
  }

  insertToken(token: Token) {
    const conexion = this.createBBDD();
    conexion.onsuccess = function () {
      this.result.transaction('session', 'readwrite').objectStore('session').put(token);
      return this.result;
    };
    conexion.onerror = function () {
      return { error: "Error al leer el token" };
    }
  }

  createBBDD(): IDBOpenDBRequest {
    const db = {indexedDB: window.indexedDB};
    const conexion: IDBOpenDBRequest = db.indexedDB.open("data")
    conexion.onupgradeneeded = function () {
      this.result.createObjectStore('session', { keyPath: 'id' });
    }
    return conexion
  }
}
