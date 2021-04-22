import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Drivers } from '../../models/drivers';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  endPoint: string = environment.driversEndPoint;

  constructor(private _httpClient: HttpClient) { }

  getDriverPerChampionships(): Observable<Drivers[]> {
    return this._httpClient.get<Drivers[]>(this.endPoint);
  }

  getOrder(): Observable<Drivers[]> {
    return this._httpClient.get<Drivers[]>(this.endPoint+'?_sort=points&_order=desc');
  }

  getById(id: number): Observable<Drivers> {
    return this._httpClient.get<Drivers>(this.endPoint+"/"+id);
  }
  
}