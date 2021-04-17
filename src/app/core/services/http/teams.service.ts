import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teams } from '../../models/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  endPoint: string = environment.teamsEndPoint;


  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Teams[]> {
    return this._httpClient.get<Teams[]>(this.endPoint);
  }
}
