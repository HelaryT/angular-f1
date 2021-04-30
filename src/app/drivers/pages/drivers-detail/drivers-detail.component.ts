import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Drivers } from 'src/app/core/models/drivers';
import { DriversFormData } from 'src/app/core/models/drivers-form-data';
import { DriversService } from 'src/app/core/services/http/drivers.service';
import { DriverEditComponent } from '../../components/driver-edit/driver-edit.component';

@Component({
  selector: 'app-drivers-detail',
  templateUrl: './drivers-detail.component.html',
  styleUrls: ['./drivers-detail.component.scss']
})
export class DriversDetailComponent implements OnInit {
  driverId!: number;
 
  drivers$!: Observable<Drivers>;
  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar ,private _driversService: DriversService,private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.driverId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.driverId) {
      this.loadData(this.driverId);
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  loadData(id: number): void {
    this.drivers$ = this._driversService.getById(id);
  }

  delete(driver: Drivers){
    this._driversService.delete(driver).subscribe(next => {
    })
    this.openSnackBar("Driver deleted","Not Nice");
  }
  openDialog(toUpdate: boolean, drivers: Drivers){

    const DriversFormData: DriversFormData = {
      toUpdate: toUpdate,
      drivers: drivers
    };

    const dialogRef = this.dialog.open(DriverEditComponent,{
      data: DriversFormData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadData(this.driverId);
    });
  }
}
