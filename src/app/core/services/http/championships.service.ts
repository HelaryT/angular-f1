import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Championships } from '../../models/championships';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipsService {

  endPoint: string = environment.championshipsEndPoint;


  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Championships[]> {
    return this._httpClient.get<Championships[]>(this.endPoint);
  }

  getById(id: number): Observable<Championships> {
    return this._httpClient.get<Championships>(this.endPoint+"/"+id);
  }
}

