import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
 
  drivers$!: Observable<Drivers>;
  constructor(private _snackBar: MatSnackBar ,private _driversService: DriversService,private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.driverId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.driverId) {
      this.fetchData(this.driverId);
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  fetchData(id: number): void {
    this.drivers$ = this._driversService.getById(id);
  }

  delete(driver: Drivers){
    this._driversService.delete(driver).subscribe(next => {
    })
    this.openSnackBar("Driver deleted","Not Nice");
  }
}
