import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Drivers } from 'src/app/core/models/drivers';
import { DriversService } from 'src/app/core/services/http/drivers.service';

@Component({
  selector: 'app-drivers-detail',
  templateUrl: './drivers-detail.component.html',
  styleUrls: ['./drivers-detail.component.scss']
})
export class DriversDetailComponent implements OnInit {
  driverId?: number;
  name!:string;
  country?:string;
  podiums?:number;
  points?:number;
  gp?:number;
  champion?:number;
  drivernb?:number;
  dob?:string;
  picture?:string;
  flag?:string;

  drivers$?: Observable<Drivers>;
  constructor(private _driversService: DriversService,private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.driverId = Number(this._activateRoute.snapshot.paramMap.get('id'));
    this.name = String(this._activateRoute.snapshot.paramMap.get('name'));
    this.country = String(this._activateRoute.snapshot.paramMap.get('country'));
    this.podiums = Number(this._activateRoute.snapshot.paramMap.get('podiums'));
    this.points = Number(this._activateRoute.snapshot.paramMap.get('points'));
    this.gp = Number(this._activateRoute.snapshot.paramMap.get('gp'));
    this.champion = Number(this._activateRoute.snapshot.paramMap.get('champion'));
    this.drivernb = Number(this._activateRoute.snapshot.paramMap.get('drivernb'));
    this.dob = String(this._activateRoute.snapshot.paramMap.get('dob'));
    this.picture = String(this._activateRoute.snapshot.paramMap.get('picture'));
    this.flag = String(this._activateRoute.snapshot.paramMap.get('flag'));


    if (this.driverId) {
      this.fetchData(this.driverId);
    }
  }
  fetchData(id: number): void {
    this.drivers$ = this._driversService.getById(id);
  }
}
