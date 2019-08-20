import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Ambient } from '../models/ambient';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAmbients(): Observable<Ambient[]> {
    return this.http.get<Ambient[]>(`${this.apiUrl}ambient/`);
  }

  getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.apiUrl}menu/`);
  }
}
