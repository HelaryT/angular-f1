import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Drivers } from 'src/app/core/models/drivers';
import { DriversService } from 'src/app/core/services/http/drivers.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {

  drivers$? : Observable<Drivers[]>;
 
  constructor(private _driversService: DriversService,private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {

      this.loadData();
    
  }

  loadData(){
   this.drivers$ = this._driversService.getDriverPerChampionships();
  }

}
