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

  getTeamsPerChampionships(id:number): Observable<Teams[]> {
    return this._httpClient.get<Teams[]>(this.endPoint+"?championshipid="+id);
  }
  getOrder(id:number): Observable<Teams[]> {
    return this._httpClient.get<Teams[]>(this.endPoint+'?_sort=points&_order=desc &championshipid='+id);
  }

  getById(id: number): Observable<Teams> {
    return this._httpClient.get<Teams>(this.endPoint+"/"+id);
  }
  post(teams: Teams): Observable<Teams>{      
    return this._httpClient.post<Teams>(this.endPoint, teams);
  }
  delete(teams: Teams): Observable<Teams>{
    return this._httpClient.delete<Teams>(this.endPoint+"/"+teams.id)
  }
}
